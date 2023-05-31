import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatsComponent } from './hero-stats.component';

describe('HeroStatsComponent', () => {
  let component: HeroStatsComponent;
  let fixture: ComponentFixture<HeroStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
