import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Referral} from "../Referral";
import {ReasonClassifications} from "../../../classifications/ReasonClassifications";
import {OwnChoiceClassifications} from "../../../classifications/OwnChoiceClassifications";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {ReferralService} from "../../../services/referral.service";
import {EpisodeofcareSelectComponent} from "../../episodeofcareelement/episodeofcare-select/episodeofcare-select.component";
import {PatientService} from "../../../services/patient.service";

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
  public referral: Referral;

  @Input()
  public active: boolean;


  selectedReferral: Referral;

  selectedEOCEId: string;

  constructor(private referralService: ReferralService, private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatient(this.referral.Patient).subscribe(pat => {
      console.log("setting real patient on referral..");
      this.referral.realPatient = pat;
    })
  }

  doReceive(sel: any) {
    if (this.episodeOfCareSelectComponent != null) {
      console.log("found eocescSelected EOCE was: " + this.selectedEOCEId + " sel: " + sel);
    } else {
      console.log("Selected EOCE was: " + this.selectedEOCEId + " sel: " + sel);
    }

    this.referralService.receiveReferral(this.referral).subscribe(ref => {
      console.log("received referral");
      this.referral = ref;
      this.patientService.getPatient(this.referral.Patient).subscribe(pat => {
        console.log("setting real patient on referral..");
        this.referral.realPatient = pat;
      })
    });
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

  convertToName(patientId) {
    // this.idConverter.convertToPatient(patientId);
    // return this.idConverter.convertedPatient;
  }

  ngReceiveReferral(referral: Referral) {
    console.log("Receiving referral: " + referral.Reason);
    this.modal.open();
  }

  openDialogBox() {
    this.modal.open();
  }

}
