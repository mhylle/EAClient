import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {EpisodeOfCareElement} from "../EpisodeOfCareElement";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'episodeofcare-select',
  templateUrl: 'episodeofcare-select.component.html',
  styleUrls: ['episodeofcare-select.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class EpisodeofcareSelectComponent implements AfterViewInit{

  private episodeOfCareElements: EpisodeOfCareElement[];

  public selectedEoceId: string;

  @Output()
  onSelectedEpisodeOfCare = new EventEmitter<string>();

  @Input()
  private patient: string;

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService, private patientService: PatientService) {
  }

  ngAfterViewInit(): void {
    if (this.patient != null) {
      this.patientService.getPatient(this.patient).subscribe(patient => {
        this.episodeOfCareElementService.getEpisodeOfCareElementsForPatient(patient).subscribe(episodeOfCareElements => {
          this.episodeOfCareElements = episodeOfCareElements;
        });
      })
    }
  }

  dismiss() {

  }

  close() {
    this.onSelectedEpisodeOfCare.emit(this.selectedEoceId);
  }
}
