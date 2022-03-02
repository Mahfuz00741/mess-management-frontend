import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JomaComponent } from './joma.component';

describe('JomaComponent', () => {
  let component: JomaComponent;
  let fixture: ComponentFixture<JomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
