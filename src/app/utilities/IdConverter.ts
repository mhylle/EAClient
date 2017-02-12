import {Injectable} from '@angular/core';
import {Patient} from "../model/patient/Patient";
import {PatientService} from "../services/patient.service";

@Injectable()
export class IdConverterService {
  private convertedPatient: Patient;

  constructor(private patientService: PatientService) {
  }

  convertToPatient(id: string) {
    this.patientService.getPatient(id).subscribe(res =>
      this.convertedPatient = res
    );
  }
}
