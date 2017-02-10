import {Component, OnInit} from '@angular/core';
import {Referral} from "../Referral";
import {ReferralService} from "../../services/referral.service";
import {CauseClassifications} from "../../classifications/CauseClassifications";
import {OwnChoiceClassifications} from "../../classifications/OwnChoiceClassifications";

@Component({
  moduleId: module.id,
  selector: 'list-referral',
  templateUrl: 'list-referral.component.html',
  styleUrls: ['list-referral.component.css'],
  providers: [ReferralService]
})
export class ListReferralComponent implements OnInit {
  private referrals: Referral[];

  constructor(private referralService: ReferralService) {
  }

  ngOnInit() {
    this.referralService.getReferrals().subscribe(referrals => {
      console.log(referrals);
      this.referrals = referrals;
    });
  }

  ngReceiveReferral(referral: Referral) {
    console.log("Receiving referral: " + referral.Cause);
  }

  convertCauseClassifikation(classification) {
    for (let item in CauseClassifications) {
      if (classification === item) {
        return CauseClassifications[item];
      }
    }
  }
  convertFreeChoiceClassifikation(classification) {
    for (let item in OwnChoiceClassifications) {
      if (classification === item) {
        return OwnChoiceClassifications[item];
      }
    }
  }
}
