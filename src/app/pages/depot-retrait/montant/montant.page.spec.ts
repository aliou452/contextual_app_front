import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MontantPage } from './montant.page';

describe('MontantPage', () => {
  let component: MontantPage;
  let fixture: ComponentFixture<MontantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MontantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
