import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayerFacturePage } from './payer-facture.page';

describe('PayerFacturePage', () => {
  let component: PayerFacturePage;
  let fixture: ComponentFixture<PayerFacturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerFacturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayerFacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
