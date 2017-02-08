import {Component, OnInit} from '@angular/core';
import {Referral} from "../Referral";
import {ReferralService} from "../../services/referral.service";

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

}
