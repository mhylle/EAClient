/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {EpisodeOfCareComponent} from "./episodeofcare.component";

describe('EpisodeOfCareComponent', () => {
  let component: EpisodeOfCareComponent;
  let fixture: ComponentFixture<EpisodeOfCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeOfCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeOfCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
