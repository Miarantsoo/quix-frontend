import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLogComponent } from './first-log.component';

describe('FirstLogComponent', () => {
  let component: FirstLogComponent;
  let fixture: ComponentFixture<FirstLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
