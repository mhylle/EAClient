import {Component, OnInit, style, keyframes, animate, transition, state, trigger} from "@angular/core";

import {Patient} from "../Patient";
import {PatientService} from "../../../services/patient.service";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";


@Component({
  selector: 'patient-list-component',
  templateUrl: 'patient.list.component.html',
  styleUrls: ['patient.list.component.css'],
  providers: [EpisodeOfCareElementService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(150, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px', offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(150, keyframes([
          style({opacity: 1, transform: 'translateX(0)', offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
        ]))
      ])
    ])
  ]
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
