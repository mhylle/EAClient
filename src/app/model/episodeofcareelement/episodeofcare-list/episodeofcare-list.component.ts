import { Component, OnInit } from '@angular/core';
import {EpisodeOfCareElement} from "../EpisodeOfCareElement";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";

@Component({
  selector: 'episodeofcare-list',
  templateUrl: 'episodeofcare-list.component.html',
  styleUrls: ['episodeofcare-list.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class EpisodeofcareListComponent implements OnInit {
  private episodeOfCareElements: EpisodeOfCareElement[];

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService) { }

  ngOnInit() {
    this.episodeOfCareElementService.getEpisodeOfCareElements().subscribe(episodeOfCareElements=> {
      console.log(episodeOfCareElements);
      this.episodeOfCareElements = episodeOfCareElements;
    });
  }

}
