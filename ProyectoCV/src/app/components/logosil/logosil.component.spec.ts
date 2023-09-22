import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosilComponent } from './logosil.component';

describe('LogosilComponent', () => {
  let component: LogosilComponent;
  let fixture: ComponentFixture<LogosilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogosilComponent]
    });
    fixture = TestBed.createComponent(LogosilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
