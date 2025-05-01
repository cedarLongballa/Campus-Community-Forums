import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnnouncementsComponent } from './forum-announcements.component';

describe('ForumAnnouncementsComponent', () => {
  let component: ForumAnnouncementsComponent;
  let fixture: ComponentFixture<ForumAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumAnnouncementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
