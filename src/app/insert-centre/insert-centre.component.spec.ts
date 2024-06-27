import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCentreComponent } from './insert-centre.component';

describe('InsertCentreComponent', () => {
  let component: InsertCentreComponent;
  let fixture: ComponentFixture<InsertCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
