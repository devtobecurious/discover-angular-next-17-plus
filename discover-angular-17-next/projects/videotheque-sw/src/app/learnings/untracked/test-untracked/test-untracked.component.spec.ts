import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUntrackedComponent } from './test-untracked.component';

describe('TestUntrackedComponent', () => {
  let component: TestUntrackedComponent;
  let fixture: ComponentFixture<TestUntrackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUntrackedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUntrackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
