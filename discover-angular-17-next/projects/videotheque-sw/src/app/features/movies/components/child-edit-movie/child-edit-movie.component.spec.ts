import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEditMovieComponent } from './child-edit-movie.component';

describe('ChildEditMovieComponent', () => {
  let component: ChildEditMovieComponent;
  let fixture: ComponentFixture<ChildEditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildEditMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
