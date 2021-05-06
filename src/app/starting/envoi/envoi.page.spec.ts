import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnvoiPage } from './envoi.page';

describe('EnvoiPage', () => {
  let component: EnvoiPage;
  let fixture: ComponentFixture<EnvoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnvoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
