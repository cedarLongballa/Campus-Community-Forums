import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumEventsComponent } from './forum-events.component';

describe('ForumEventsComponent', () => {
  let component: ForumEventsComponent;
  let fixture: ComponentFixture<ForumEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
