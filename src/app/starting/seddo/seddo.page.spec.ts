import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeddoPage } from './seddo.page';

describe('SeddoPage', () => {
  let component: SeddoPage;
  let fixture: ComponentFixture<SeddoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeddoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeddoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
