import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCentreComponent } from './liste-centre.component';

describe('ListeCentreComponent', () => {
  let component: ListeCentreComponent;
  let fixture: ComponentFixture<ListeCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeCentreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
