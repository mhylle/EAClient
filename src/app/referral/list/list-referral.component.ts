import {Component, OnInit, OnDestroy} from '@angular/core';
import {Referral} from "../Referral";
import {ReferralService} from "../../services/referral.service";
import {CauseClassifications} from "../../classifications/CauseClassifications";
import {OwnChoiceClassifications} from "../../classifications/OwnChoiceClassifications";
import {PatientIdFilterPipe} from "../../filters/PatientIdFilter";
import {ContextService} from "../../services/context.service";
import {Subscription} from "rxjs";
import {Patient} from "../../patient/patient-details/Patient";

@Component({
  moduleId: module.id,
  selector: 'list-referral',
  templateUrl: 'list-referral.component.html',
  styleUrls: ['list-referral.component.css'],
  providers: [ReferralService, PatientIdFilterPipe]
})
export class ListReferralComponent implements OnInit, OnDestroy {
  private referrals: Referral[];
  private filteredReferrals: Referral[];
  subscription: Subscription;

  constructor(private referralService: ReferralService, private patientIdPipe: PatientIdFilterPipe, private contextService: ContextService) {
  }

  ngOnInit() {
    this.referralService.getReferrals().subscribe(referrals => {
      this.referrals = referrals;
      this.filteredReferrals = referrals;
    });
    this.subscription = this.contextService.contextChange.subscribe(context => {
      this.filteredReferrals = this.patientIdPipe.transform(this.referrals, context);
    });
  }

  ngReceiveReferral(referral: Referral) {
    console.log("Receiving referral: " + referral.Cause);
  }

  convertCauseClassification(classification) {
    for (let item in CauseClassifications) {
      if (classification === item) {
        return CauseClassifications[item];
      }
    }
  }

  convertFreeChoiceClassification(classification) {
    for (let item in OwnChoiceClassifications) {
      if (classification === item) {
        return OwnChoiceClassifications[item];
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
