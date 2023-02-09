import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnpcSalComponent } from './anpc-sal.component';

describe('AnpcSalComponent', () => {
  let component: AnpcSalComponent;
  let fixture: ComponentFixture<AnpcSalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnpcSalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnpcSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
