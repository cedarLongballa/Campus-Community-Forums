import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPostComponent } from './request-post.component';

describe('RequestPostComponent', () => {
  let component: RequestPostComponent;
  let fixture: ComponentFixture<RequestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
