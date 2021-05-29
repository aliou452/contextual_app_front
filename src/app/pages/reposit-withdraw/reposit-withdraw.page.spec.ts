import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepositWithdrawPage } from './reposit-withdraw.page';

describe('RepositWithdrawPage', () => {
  let component: RepositWithdrawPage;
  let fixture: ComponentFixture<RepositWithdrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositWithdrawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepositWithdrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
