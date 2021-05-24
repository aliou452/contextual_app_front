import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete' | 'upload' | 'download';

@Injectable()
export class NativeHttpInterceptor implements HttpInterceptor {
  constructor(
    private nativeHttp: HTTP,
    private platform: Platform,
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.platform.is('cordova')) {
      return next.handle(request);
    }

    return from(this.handleNativeRequest(request));
  }

  private async handleNativeRequest(request: HttpRequest<any>): Promise<HttpResponse<any>> {
    const headerKeys = request.headers.keys();
    const headers = {};

    headerKeys.forEach((key) => {
      headers[key] = request.headers.get(key);
    });

    headers['authorization'] = `Bearer ${localStorage.getItem("jwt_token").split('"')[1]}`

    try {
      await this.platform.ready();

      const method = <HttpMethod> request.method.toLowerCase();

      const nativeHttpResponse = await this.nativeHttp.sendRequest(request.url, {
        method: method,
        data: request.body,
        headers: headers,
        serializer: 'json',
      });

      let body;

      try {
        body = JSON.parse(nativeHttpResponse.data);
      } catch (error) {
        body = { response: nativeHttpResponse.data };
      }

      const response = new HttpResponse({
        body: body,
        status: nativeHttpResponse.status,
        headers: new HttpHeaders(nativeHttpResponse.headers),
        url: nativeHttpResponse.url,
      });

      return Promise.resolve(response);
    } catch (error) {
      if (!error.status) { return Promise.reject(error); }

      const response = new HttpResponse({
        body: JSON.parse(error.error),
        status: error.status,
        headers: error.headers,
        url: error.url,
      });

      return Promise.reject(response);
    }
  }
}
