import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectVehicalPage } from './select-vehical.page';

describe('SelectVehicalPage', () => {
  let component: SelectVehicalPage;
  let fixture: ComponentFixture<SelectVehicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVehicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectVehicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
