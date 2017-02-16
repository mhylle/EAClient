import {Component, OnInit, Output, Input} from '@angular/core';
import {EpisodeOfCareElement} from "../EpisodeOfCareElement";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";

@Component({
  selector: 'episodeofcare-select',
  templateUrl: 'episodeofcare-select.component.html',
  styleUrls: ['episodeofcare-select.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class EpisodeofcareSelectComponent implements OnInit {
  private episodeOfCareElements: EpisodeOfCareElement[];

  @Input("selectedEoceId")
  @Output("selectedEoceId")
  private selectedEoceId: string;

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService) { }

  ngOnInit() {
    this.episodeOfCareElementService.getEpisodeOfCareElements().subscribe(episodeOfCareElements=> {
      this.episodeOfCareElements = episodeOfCareElements;
    });
  }

}
