import {Component, OnInit, OnDestroy, ViewChild, Input} from "@angular/core";
import {Referral} from "../Referral";
import {Subscription} from "rxjs";
import {ReferralService} from "../../../services/referral.service";
import {PatientIdFilterPipe} from "../../../filters/PatientIdFilter";
import {ContextService} from "../../../services/context.service";
import {ReasonClassifications} from "../../../classifications/CauseClassifications";
import {OwnChoiceClassifications} from "../../../classifications/OwnChoiceClassifications";
import {IdConverterService} from "../../../utilities/IdConverter";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  moduleId: module.id,
  selector: 'list-referral',
  templateUrl: 'list-referral.component.html',
  styleUrls: ['list-referral.component.css'],
  providers: [ReferralService, PatientIdFilterPipe, IdConverterService],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //       animate(150, keyframes([
  //         style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
  //         style({opacity: 1, transform: 'translateX(15px', offset: 0.3}),
  //         style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
  //       ]))
  //     ]),
  //     transition('* => void', [
  //       animate(150, keyframes([
  //         style({opacity: 1, transform: 'translateX(0)', offset: 0}),
  //         style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
  //         style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
  //       ]))
  //     ])
  //   ])
  // ]
})
export class ListReferralComponent implements OnInit, OnDestroy {
  private referrals: Referral[];
  private filteredReferrals: Referral[];

  subscription: Subscription;
  @Input("selectedReferral")
  selectedEoceId: string;
  @ViewChild('selectEpisodeOfCareElement')
  modal:ModalComponent;
  private selectedReferral: Referral;

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

  ngReceiveReferral(referral: Referral) {
    console.log("Receiving referral: " + referral.Reason);
    this.selectedReferral = referral;
    this.modal.open().then((value) => {
      console.log("Value: " + value + " selectedOECE Id was: " +this.selectedEoceId);
    } );
  }

  doReceive() {
    console.log("Selected EOCE was: " + this.selectedEoceId);
    this.referralService.receiveReferral(this.selectedReferral).subscribe(ref =>
      this.referrals[this.referrals.indexOf(this.selectedReferral)] = ref);
  }
  convertReasonClassification(classification) {
    for (let item in ReasonClassifications) {
      if (classification === item) {
        return ReasonClassifications[item];
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
