import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverflowPage } from './overflow.page';

describe('OverflowPage', () => {
  let component: OverflowPage;
  let fixture: ComponentFixture<OverflowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverflowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverflowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
