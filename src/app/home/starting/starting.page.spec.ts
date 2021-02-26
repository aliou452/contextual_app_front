import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartingPage } from './starting.page';

describe('StartingPage', () => {
  let component: StartingPage;
  let fixture: ComponentFixture<StartingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
