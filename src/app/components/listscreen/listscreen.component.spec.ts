import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

import { ListscreenComponent } from './listscreen.component';

describe('ListscreenComponent', () => {
  let component: ListscreenComponent;
  let fixture: ComponentFixture<ListscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListscreenComponent ],
      providers: [BackendService, Router]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have user h2', () => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('h2').textContent).toContain('Users');
    expect(component).toBeTruthy();
  });
});
