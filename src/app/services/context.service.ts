import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {Patient} from "../patient/patient-details/Patient";

@Injectable()
export class ContextService {

  private _context = null;
  contextChange: Observable<Patient>;
  private _observer: Observer<Patient>;

  constructor() {
    this.contextChange = new Observable(observer => {
      this._observer = observer}).share();
  }

  setContext(patient: Patient) {
    this._context = patient;
    this._observer.next(patient);
  }

  context() {
    return this._context;
  }
}
