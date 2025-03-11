import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingInputComponent } from './greeting-input.component';

describe('GreetingInputComponent', () => {
  let component: GreetingInputComponent;
  let fixture: ComponentFixture<GreetingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
