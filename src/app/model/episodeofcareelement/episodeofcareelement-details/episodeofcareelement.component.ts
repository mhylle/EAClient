import {Component, Input} from '@angular/core';
import {EpisodeOfCareElement} from "../EpisodeOfCareElement";

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

}
