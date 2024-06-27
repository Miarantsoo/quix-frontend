import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAttenteComponent } from './file-attente.component';

describe('FileAttenteComponent', () => {
  let component: FileAttenteComponent;
  let fixture: ComponentFixture<FileAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileAttenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
