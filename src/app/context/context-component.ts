import {Component, OnInit, OnDestroy} from "@angular/core";
import {Patient} from "../model/patient/Patient";

import {Subscription} from "rxjs";
import {Referral} from "../model/referral/Referral";
import {PatientContextService} from "../services/patient.context.service";
import {ReferralContextService} from "../services/referral.context.service";

@Component({
  moduleId: module.id,
  selector: 'context',
  templateUrl: 'context.component.html',
  styleUrls: ['context.component.css']
})
export class ContextComponent implements OnInit, OnDestroy {
  public patientContext: Patient;
  public referralContext: Referral;
  patientSubscription: Subscription;
  referralSubscription: Subscription;

  constructor(private patientContextService: PatientContextService, private referralContextService: ReferralContextService) {
  }

  ngOnInit() {
    this.patientSubscription = this.patientContextService.contextChange.subscribe(context => {
      this.patientContext = context;
    });
    this.referralSubscription = this.referralContextService.contextChange.subscribe(context => {
      this.referralContext = context;
    });
  }

  ngOnDestroy() {
    this.patientSubscription.unsubscribe();
    this.referralSubscription.unsubscribe();
  }
}
