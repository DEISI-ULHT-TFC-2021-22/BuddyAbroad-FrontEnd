import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProfileCreationPage } from './new-profile-creation.page';

describe('NewProfileCreationPage', () => {
  let component: NewProfileCreationPage;
  let fixture: ComponentFixture<NewProfileCreationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfileCreationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProfileCreationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
