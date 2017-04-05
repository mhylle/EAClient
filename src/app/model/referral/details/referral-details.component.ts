import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {Referral} from "../Referral";
import {ReasonClassifications} from "../../../classifications/ReasonClassifications";
import {OwnChoiceClassifications} from "../../../classifications/OwnChoiceClassifications";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {ReferralService} from "../../../services/referral.service";
import {EpisodeofcareSelectComponent} from "../../episodeofcareelement/episodeofcare-select/episodeofcare-select.component";
import {PatientService} from "../../../services/patient.service";
import {Router} from "@angular/router";
import {ReferralContextService} from "../../../services/referral.context.service";

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
  public active: string;

  selectedReferral: Referral;

  selectedEoceId: string;


  constructor(private router: Router,
              private referralService: ReferralService,
              private patientService: PatientService,
              private referralContextService: ReferralContextService) {
  }

  ngOnInit() {
    if (this.referral.Patient != null) {
      this.patientService.getPatient(this.referral.Patient).subscribe(pat => {
        this.referral.realPatient = pat;
      });
    }
  }

  doReceive(episodeOfCareElement: string) {
    console.log(episodeOfCareElement);
    this.modal.close();
    if (episodeOfCareElement == "new") {
      this.referralContextService.setContext(this.referral);
      this.router.navigate(["/createEpisodeOfCareElement"]);
    } else {
      console.log('had an event, add it to the referral');
      this.receiveReferral();
    }
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

  receiveReferral() {
    this.referralService.receiveReferral(this.referral).subscribe((ref: Referral) => {
      this.referral = ref;
      // check if the referral was received properly
      if (ref.Status.toString() == "REJECTED") {
        this.modal.open();
      } else {
        console.log("Refererral was received as it already has an episode of care..");
      }
    });
  }
}
