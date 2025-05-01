import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBarComponent } from './weather-bar.component';

describe('WeatherBarComponent', () => {
  let component: WeatherBarComponent;
  let fixture: ComponentFixture<WeatherBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
