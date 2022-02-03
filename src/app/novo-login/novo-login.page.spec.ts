import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovoLoginPage } from './novo-login.page';

describe('NovoLoginPage', () => {
  let component: NovoLoginPage;
  let fixture: ComponentFixture<NovoLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
