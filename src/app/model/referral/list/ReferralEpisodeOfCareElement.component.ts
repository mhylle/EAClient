import {Component, OnInit, Input} from "@angular/core";
import {EpisodeOfCareElement} from "../../episodeofcareelement/EpisodeOfCareElement";
import {Referral} from "../Referral";
import {EncounterService} from "../../../services/encounter.service";
import {IdConverterService} from "../../../utilities/IdConverter";

@Component({
  moduleId: module.id,
  selector: 'referral-eoce',
  templateUrl: 'referral-eoce.component.html',
  providers: [EncounterService]
})
export class ReferralEpisodeOfCareElementComponent implements OnInit {
  @Input()
  referral: Referral;
  referralEpisodeOfCareElement: EpisodeOfCareElement;

  constructor(private idConverterService: IdConverterService) {
  }

  ngOnInit() {
    if (this.referral && this.referral != null) {
      if (this.referral.Encounter && this.referral.Encounter != null) {
        if (this.referral.Patient && this.referral.Patient != null) {
          // TODO Might have an error here..
          let patient = this.idConverterService.convertToPatient(this.referral.Patient);
          if (patient.EpisodeOfCareElements && patient.EpisodeOfCareElements != null) {
            let episodeOfCareElements = this.referral.Encounter.Patient.EpisodeOfCareElements;
            for (let i = 0; i < episodeOfCareElements.length; i++) {
              let obj = episodeOfCareElements[i];
              if (obj.Referral != null) {
                this.referralEpisodeOfCareElement = obj;
              }
            }
          }
        }
      }
    }
  }
}
