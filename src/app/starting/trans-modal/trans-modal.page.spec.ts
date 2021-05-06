import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransModalPage } from './trans-modal.page';

describe('TransModalPage', () => {
  let component: TransModalPage;
  let fixture: ComponentFixture<TransModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
