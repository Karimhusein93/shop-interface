import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnpcComponent } from './anpc.component';

describe('AnpcComponent', () => {
  let component: AnpcComponent;
  let fixture: ComponentFixture<AnpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
