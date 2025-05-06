import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumRequestsComponent } from './forum-requests.component';

describe('ForumRequestsComponent', () => {
  let component: ForumRequestsComponent;
  let fixture: ComponentFixture<ForumRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
