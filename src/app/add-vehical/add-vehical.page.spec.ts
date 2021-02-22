import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVehicalPage } from './add-vehical.page';

describe('AddVehicalPage', () => {
  let component: AddVehicalPage;
  let fixture: ComponentFixture<AddVehicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVehicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
