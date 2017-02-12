import {Injectable} from "@angular/core";
import {Patient} from "../model/patient/Patient";
import {Observable, Observer} from "rxjs";

@Injectable()
export class ContextService {

  private _context: Patient = null;
  contextChange: Observable<Patient>;
  private _observer: Observer<any>;

  constructor() {
    this.contextChange = new Observable(
      observer => this._observer = observer
    ).share();
  }

  get context() {
    return this._context;
  }

  setContext(patient: Patient) {
    this._context = patient;
    if (this._observer) {
      this._observer.next(patient);
    }
  }
}
