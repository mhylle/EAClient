/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {EpisodeofcareSelectComponent} from "./episodeofcare-select.component";

describe('EpisodeofcareSelectComponent', () => {
  let component: EpisodeofcareSelectComponent;
  let fixture: ComponentFixture<EpisodeofcareSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeofcareSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeofcareSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
