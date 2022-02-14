import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepEmplistComponent } from './dep-emplist.component';

describe('DepEmplistComponent', () => {
  let component: DepEmplistComponent;
  let fixture: ComponentFixture<DepEmplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepEmplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepEmplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
