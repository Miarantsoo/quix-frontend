import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClientComponent } from './insert-client.component';

describe('InsertClientComponent', () => {
  let component: InsertClientComponent;
  let fixture: ComponentFixture<InsertClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
