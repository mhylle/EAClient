import {Injectable} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {Observable, Subscriber} from "rxjs";

@Injectable()
export class ContextService {

  private _context: Patient;
  constructor() {
  }

  get context(): Observable<Patient> {
    return new Observable<Patient>((subscriber: Subscriber<Patient>) => subscriber.next(this._context)).map(o => o);
  }

  setContext(patient: Patient) {
    this._context = patient;
    return new Observable<Patient>((subscriber: Subscriber<Patient>) => subscriber.next(this._context)).map(o => o);
  }
}
