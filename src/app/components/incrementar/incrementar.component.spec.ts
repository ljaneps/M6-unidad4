import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementarComponent } from './incrementar.component';

describe('IncrementarComponent', () => {
  let component: IncrementarComponent;
  let fixture: ComponentFixture<IncrementarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
