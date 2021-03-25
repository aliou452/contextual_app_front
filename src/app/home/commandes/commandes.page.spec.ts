import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandesPage } from './commandes.page';

describe('CommandesPage', () => {
  let component: CommandesPage;
  let fixture: ComponentFixture<CommandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
