import {Component, OnInit} from '@angular/core';
import {Referral} from "../Referral";
import {ALDA00} from "../../classifications/referaltype";

@Component({
  moduleId: module.id,
  selector: 'referral',
  templateUrl: 'referral.component.html'
})
export class CreateReferralComponent implements OnInit {

  private referral: Referral;
  constructor() {
  }

  ngOnInit() {
    this.referral = {
      Cause: "Obs Pro DG10",
      Type: ALDA00,
      ReferringParty: "",
      OwnChoice: false,
      ReferredAt: new Date()
    }
  }

}
