import {Injectable} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {Observable, Subscriber} from "rxjs";
import {isUndefined} from "util";

@Injectable()
export class ContextService {

  private _context: Patient;
  constructor() {
  }

  get context(): Observable<Patient> {
    if (this._context !== null && !isUndefined(this._context) ) {
      console.log("Context not null");
      console.log("Get Context, current context: " + this._context.AlternativeId);
    } else {
      console.log("Get Context, current context: no context");
    }
    return Observable.create(function (observer) {
      observer.next(this._context);
      observer.complete();
    });

  }

  setContext(patient: Patient) {
    console.log("ready to set context");
    console.log("Sat context, " + patient.AlternativeId);
    this._context = patient;
    return Observable.create(function (observer) {
      observer.next(this._context);
      observer.complete();
    });
  }
}
