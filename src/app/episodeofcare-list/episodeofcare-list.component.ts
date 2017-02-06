import { Component, OnInit } from '@angular/core';
import {EpisodeOfCareElementService} from "../services/episodeofcareelement.service";
import {EpisodeOfCareElement} from "../episodeofcareelement/episodeofcareelement-details/EpisodeOfCareElement";

@Component({
  selector: 'episodeofcare-list',
  templateUrl: './episodeofcare-list.component.html',
  styleUrls: ['./episodeofcare-list.component.css'],
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
