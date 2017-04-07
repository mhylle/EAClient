/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {CreateEpisodeOfCareElementComponent} from "./create.component";

describe('CreatePatientComponent', () => {
  let component: CreateEpisodeOfCareElementComponent;
  let fixture: ComponentFixture<CreateEpisodeOfCareElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEpisodeOfCareElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEpisodeOfCareElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
