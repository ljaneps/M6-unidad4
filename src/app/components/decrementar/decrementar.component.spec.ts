import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementarComponent } from './decrementar.component';

describe('DecrementarComponent', () => {
  let component: DecrementarComponent;
  let fixture: ComponentFixture<DecrementarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecrementarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
