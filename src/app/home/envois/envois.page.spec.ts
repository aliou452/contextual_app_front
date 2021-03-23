import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnvoisPage } from './envois.page';

describe('EnvoisPage', () => {
  let component: EnvoisPage;
  let fixture: ComponentFixture<EnvoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnvoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
