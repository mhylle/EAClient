import {Component, OnInit, Input} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {Patient} from "../Patient";

@Component({
  moduleId: module.id,
  selector: 'basic-patient',
  templateUrl: 'basic.component.html',
  providers: [PatientService]
})
export class BasicPatientComponent implements OnInit {
  @Input()
  patientId: string;

  basicpatient: Patient;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatient(this.patientId).subscribe(patient => {
      this.basicpatient = patient;
    });
  }

}
