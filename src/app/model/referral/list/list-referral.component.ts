import {Component, OnDestroy, OnInit} from "@angular/core";
import {Referral} from "../Referral";
import {Subscription} from "rxjs";
import {ReferralService} from "../../../services/referral.service";
import {PatientIdFilterPipe} from "../../../filters/PatientIdFilter";
import {ContextService} from "../../../services/context.service";
import {IdConverterService} from "../../../utilities/IdConverter";

@Component({
  moduleId: module.id,
  selector: 'list-referral',
  templateUrl: 'list-referral.component.html',
  styleUrls: ['list-referral.component.css'],
  providers: [ReferralService, PatientIdFilterPipe, IdConverterService]
})
export class ListReferralComponent implements OnInit, OnDestroy {
  private referrals: Referral[];
  filteredReferrals: Referral[];

  subscription: Subscription;
  selectedReferral: Referral;

  constructor(private referralService: ReferralService,
              private patientIdPipe: PatientIdFilterPipe,
              private contextService: ContextService) {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setSelectedReferral(referral: Referral) {
    if (this.selectedReferral == referral) {
      this.selectedReferral = null;
    } else {
      this.selectedReferral = referral;
    }
  }
}
