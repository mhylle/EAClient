import {Component, OnInit} from '@angular/core';
import {CompleterData, CompleterService} from "ng2-completer";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../patient-details/Patient";
import {ContextComponent} from "../../context/context-component";

@Component({
  moduleId: module.id,
  selector: 'patient-search',
  templateUrl: 'patient-search.component.html',
  providers: [PatientService, ContextComponent]
})
export class PatientSearchComponent implements OnInit {
  private searchStr: string;
  private dataService: CompleterData;
  private patients: Patient[];

  constructor(private completerService: CompleterService, private patientService: PatientService, private contextComponent: ContextComponent) {

  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
      this.dataService = this.completerService.local(this.patients, 'AlternativeId', 'AlternativeId')
    });
  }

  selectPatient() {
    console.log("select patient");
    console.log(this.searchStr);
    for (let i = 0; i < this.patients.length; i++) {
      let obj = this.patients[i];
      if (obj.AlternativeId === this.searchStr){
        this.contextComponent.setContext(obj);
      }
    }
  }
}
