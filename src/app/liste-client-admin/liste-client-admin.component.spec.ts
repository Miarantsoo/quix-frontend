import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientAdminComponent } from './liste-client-admin.component';

describe('ListeClientAdminComponent', () => {
  let component: ListeClientAdminComponent;
  let fixture: ComponentFixture<ListeClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeClientAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
