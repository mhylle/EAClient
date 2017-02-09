import {Injectable} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {Observable, Observer} from "rxjs";


@Injectable()
export class ContextService {

  private _context: Patient = null;
  change$: Observable<Patient>;
  private _observer: Observer<any>;

  constructor() {
    this.change$ = new Observable(
      observer => this._observer = observer
    ).share();
  }

  get context() {
    return this._context;
  }

  setContext(patient: Patient) {
    console.log("ready to set context");
    console.log("Sat context, " + patient.AlternativeId);
    this._context = patient;
    if (this._observer) {
      this._observer.next(patient);
    }
    return Observable.create(function (observer) {
      observer.next(this._context);
      observer.complete();
    });
  }
}
