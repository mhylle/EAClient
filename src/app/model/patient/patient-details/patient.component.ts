import {Component, OnInit, Input} from "@angular/core";
import {Patient} from "../Patient";
import {EpisodeOfCareElement} from "../../episodeofcareelement/EpisodeOfCareElement";
import {PatientService} from "../../../services/patient.service";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";

@Component({
  selector: 'patient',
  templateUrl: 'patient.component.html',
  styleUrls: ['patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input()
  patient: Patient;
  public eocElms: EpisodeOfCareElement[];
  public selectedEoc: EpisodeOfCareElement;
  result: any;

  constructor(private patientService: PatientService, private episodeOfCareElementService: EpisodeOfCareElementService) {
  }

  ngOnInit(): void {
    this.episodeOfCareElementService.getEpisodeOfCareElements().subscribe(episodeOfCareElements => {
      this.eocElms = episodeOfCareElements;
    });
  }

  addEoCElement(): void {
    this.patientService.addEpisodeOfCareElementToPatient(this.patient, this.selectedEoc).subscribe(result => {
        this.result = result;
      }
    )
  }
}
