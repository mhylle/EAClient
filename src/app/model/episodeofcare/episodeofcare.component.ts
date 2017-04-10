import {Component, OnInit} from "@angular/core";
import {EpisodeOfCareService} from "../../services/episodeofcare.service";
import {EpisodeOfCare} from "./EpisodeOfCare";


@Component({
  selector: 'EpisodeOfCare',
  templateUrl: 'episodeofcare.component.html',
  styleUrls: ['episodeofcare.component.css'],
  providers: [EpisodeOfCareService]
})
export class EpisodeOfCareComponent implements OnInit {

  start: Date = new Date();
  end: Date= new Date();
  episodesOfCare: EpisodeOfCare[];

  constructor(private episodeOfCareService: EpisodeOfCareService) {
    this.start = new Date();
    this.start.setHours(0,0,0,0)
    this.start.setDate(this.start.getDate() -25);
    this.end = new Date();
    this.end.setHours(23,59,59,999);
    this.end.setDate(this.end.getDate()+5);

  }

  ngOnInit(): void {
    // TODO: use patient context.
    this.episodeOfCareService.getEpisodesOfCare(null).subscribe(episodesOfCare => {
      this.episodesOfCare = episodesOfCare;
    });
  }

}
