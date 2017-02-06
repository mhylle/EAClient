import {Component} from "@angular/core";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'create-patient',
  templateUrl: 'create-patient.component.html',
  styleUrls: ['create-patient.component.css'],
  providers: [PatientService]
})
export class CreatePatientComponent {
  public Name: string;
  public AlternativeId: string;

  public result: any;
  constructor(private patientService: PatientService) { }

  onSubmit() {
    let patient = {
      Name: this.Name,
      AlternativeId: this.AlternativeId,
    };

    this.patientService.createPatient(patient).subscribe(data => {
      this.result = data;
    });
  }

}
