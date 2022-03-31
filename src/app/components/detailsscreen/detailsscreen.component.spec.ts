import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

import { DetailsscreenComponent } from './detailsscreen.component';

describe('DetailsscreenComponent', () => {
  let component: DetailsscreenComponent;
  let fixture: ComponentFixture<DetailsscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsscreenComponent ],
      providers: [BackendService, ActivatedRoute]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
