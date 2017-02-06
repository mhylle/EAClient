import {Component} from "@angular/core";
import {EpisodeOfCareElementService} from "../../services/episodeofcareelement.service";


@Component({
  selector: 'create-episodeofcareelement',
  templateUrl: 'create-episodeofcareelement.component.html',
  styleUrls: ['create-episodeofcareelement.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class CreateEpisodeOfCareElementComponent {
  public episodeOfCareLabel: string;
  public responsibleUnit: string;
  public startTime: any;
  public endTime: any;

  public result: any;

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService) {

  }

  onSubmit() {
    let start = new Date(this.startTime.year, this.startTime.month, this.startTime.day);
    let end = null;
    if (this.endTime !== null) {
      end = new Date(this.endTime.year, this.endTime.month, this.endTime.day);
    }
    let episodeOfCareElement = {
      episodeOfCareLabel: this.episodeOfCareLabel,
      responsibleUnit: this.responsibleUnit,
      startTime: start.toJSON(),
      endTime: end.toJSON(),
    };
    console.log(episodeOfCareElement);
    this.episodeOfCareElementService.createEpisodeOfCareElement(episodeOfCareElement).subscribe(data => {
      this.result = data;
    });
  }
}
