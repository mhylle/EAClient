import {Component, Input} from '@angular/core';
import {EpisodeOfCareElement} from "../EpisodeOfCareElement";
import {OrgCode} from "../../../classifications/OrgCode";

@Component({
  selector: 'episodeofcareelement',
  templateUrl: 'episodeofcareelement.component.html',
  styleUrls: ['episodeofcareelement.component.css']
})
export class EpisodeOfCareElementComponent {

  @Input()
  episodeOfCareElement: EpisodeOfCareElement;

  constructor() {
  }

  convertUnit(unit) :string{
    for (let item in OrgCode) {
      if (unit === item) {
        return OrgCode[item];
      }
    }
  }

}
