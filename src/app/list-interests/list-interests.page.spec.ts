import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListInterestsPage } from './list-interests.page';

describe('ListInterestsPage', () => {
  let component: ListInterestsPage;
  let fixture: ComponentFixture<ListInterestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInterestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
