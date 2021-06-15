import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacturePage } from './facture.page';

describe('FacturePage', () => {
  let component: FacturePage;
  let fixture: ComponentFixture<FacturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
