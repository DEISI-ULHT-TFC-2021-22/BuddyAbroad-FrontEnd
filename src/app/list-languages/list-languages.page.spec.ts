import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListLanguagesPage } from './list-languages.page';

describe('ListLanguagesPage', () => {
  let component: ListLanguagesPage;
  let fixture: ComponentFixture<ListLanguagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLanguagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListLanguagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
