import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhoneAuthPage } from './phone-auth.page';

describe('PhoneAuthPage', () => {
  let component: PhoneAuthPage;
  let fixture: ComponentFixture<PhoneAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
