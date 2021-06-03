import { Injectable } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isShowingLoader = false;
  loader: any;

  constructor(
    public loadingController: LoadingController,
    public platform: Platform
  ) { }

  async stopLoader() {
    if (this.loader) {
      this.loader.dismiss()
      this.loader = null
      this.isShowingLoader = false
    }
  }

  async showLoader(time: number) {
    if (!this.isShowingLoader) {
      this.isShowingLoader = true
      this.loader = await this.loadingController.create({
        message: 'En cours...',
        duration: time,
        mode: 'ios',
        translucent: true
      });
      return await this.loader.present();
    }
  }

}
