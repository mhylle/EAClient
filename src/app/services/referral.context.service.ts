import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {Referral} from "../model/referral/Referral";

@Injectable()
export class ReferralContextService {

  private _context: Referral = null;
  contextChange: Observable<Referral>;
  private _observer: Observer<any>;

  constructor() {
    this.contextChange = new Observable(
      observer => this._observer = observer
    ).share();
  }

  get context() {
    return this._context;
  }

  setContext(referral: Referral) {
    this._context = referral;
    if (this._observer) {
      this._observer.next(referral);
    }
  }
}
