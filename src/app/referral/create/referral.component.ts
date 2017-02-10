import {Component, OnInit} from '@angular/core';
import {Referral} from "../Referral";

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

  }

}
