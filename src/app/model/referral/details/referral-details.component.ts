import {Component, OnInit, Input, ViewChild} from "@angular/core";
import {Referral} from "../Referral";
import {ReasonClassifications} from "../../../classifications/ReasonClassifications";
import {OwnChoiceClassifications} from "../../../classifications/OwnChoiceClassifications";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {ReferralService} from "../../../services/referral.service";
import {EpisodeofcareSelectComponent} from "../../episodeofcareelement/episodeofcare-select/episodeofcare-select.component";

@Component({
  moduleId: module.id,
  selector: 'referral-details',
  styleUrls: ['referral-details.component.css'],
  templateUrl: 'referral-details.component.html'
})
export class ReferralDetailsComponent implements OnInit {
  @ViewChild(EpisodeofcareSelectComponent) episodeOfCareSelectComponent: EpisodeofcareSelectComponent;

  @ViewChild('selectEpisodeOfCareElement')
  modal: ModalComponent;

  @Input()
  private referral: Referral;

  @Input()
  private active: boolean

  selectedReferral: Referral;

  selectedEoceId: string;

  constructor(private referralService: ReferralService) {
  }

  ngOnInit() {

  }

  doReceive(sel: any) {
    if (this.episodeOfCareSelectComponent != null) {
      let selectedEoceId2 = this.episodeOfCareSelectComponent.selectedEoceId;
      console.log("found eocescSelected EOCE was: " + this.selectedEoceId + " sel: " + sel);
    } else {
      console.log("Selected EOCE was: " + this.selectedEoceId + " sel: " + sel);
    }

    this.referralService.receiveReferral(this.referral).subscribe(ref =>
      this.referral = ref);
  }

  selectReferral(referral: Referral) {
    this.selectedReferral = referral;
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

  ngReceiveReferral(referral: Referral) {
    console.log("Receiving referral: " + referral.Reason);
    this.modal.open();
  }

  openDialogBox() {
    this.modal.open();
  }

}
