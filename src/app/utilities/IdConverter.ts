import {Injectable} from "@angular/core";
import {Patient} from "../model/patient/Patient";
import {PatientService} from "../services/patient.service";

@Injectable()
export class IdConverterService {
  private _convertedPatient: Patient;

  constructor(private patientService: PatientService) {
  }

  convertToPatient(id: string): Patient {
    this.patientService.getPatient(id).subscribe(res => {
      this._convertedPatient = res;
    });
    return this._convertedPatient;
  }

  get convertedPatient() {
    return this._convertedPatient;
  }
}
