import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../patient-details/Patient";
import {EpisodeOfCareElementService} from "../../services/episodeofcareelement.service";

@Component({
  selector: 'patient-list-component',
  templateUrl: 'patient.list.component.html',
  styleUrls: ['patient.list.component.css'],
  providers: [PatientService, EpisodeOfCareElementService]
})
export class PatientListComponent implements OnInit {

  private patients: Patient[];
  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
      console.log(patients);
      this.patients = patients;
    });
  }

}
