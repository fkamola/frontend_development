import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBeerComponent } from './info-beer.component';

describe('InfoBeerComponent', () => {
  let component: InfoBeerComponent;
  let fixture: ComponentFixture<InfoBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
