import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntrackedDiscoverComponent } from './untracked-discover.component';

describe('UntrackedDiscoverComponent', () => {
  let component: UntrackedDiscoverComponent;
  let fixture: ComponentFixture<UntrackedDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UntrackedDiscoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UntrackedDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
