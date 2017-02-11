import {Component, OnInit} from "@angular/core";
import {CompleterData, CompleterService} from "ng2-completer";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../patient-details/Patient";
import {ContextService} from "../../services/context.service";

@Component({
  moduleId: module.id,
  selector: 'patient-search',
  templateUrl: 'patient-search.component.html',
  providers: [PatientService]
})
export class PatientSearchComponent implements OnInit {
  private searchStr: string;
  private dataService: CompleterData;
  private patients: Patient[];

  constructor(private completerService: CompleterService, private patientService: PatientService, private contextService: ContextService) {

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
        console.log("Found patient, trying to set to context");
        this.contextService.setContext(obj);
      }
    }
  }

  clearContext() {
    this.contextService.setContext(null);
  }
}
