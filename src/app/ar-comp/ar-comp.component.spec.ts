import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCompComponent } from './ar-comp.component';

describe('ArCompComponent', () => {
  let component: ArCompComponent;
  let fixture: ComponentFixture<ArCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
