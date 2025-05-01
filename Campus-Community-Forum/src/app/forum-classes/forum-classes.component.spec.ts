import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumClassesComponent } from './forum-classes.component';

describe('ForumClassesComponent', () => {
  let component: ForumClassesComponent;
  let fixture: ComponentFixture<ForumClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
