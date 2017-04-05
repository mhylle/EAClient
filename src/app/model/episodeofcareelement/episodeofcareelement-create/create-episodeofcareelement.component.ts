import {Component, OnInit} from "@angular/core";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";
import {ReferralService} from "../../../services/referral.service";
import {Subscription} from "rxjs";
import {Route} from "@angular/router";

@Component({
  selector: 'create-episodeofcareelement',
  templateUrl: 'create-episodeofcareelement.component.html',
  styleUrls: ['create-episodeofcareelement.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class CreateEpisodeOfCareElementComponent implements OnInit {

  public episodeOfCareLabel: string;
  public responsibleUnit: string;
  public startTime: any;
  public endTime: any;

  public result: any;
  // private subscription: Subscription;
  // private route: Route;

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService) {

  }

  ngOnInit(): void {
    // this.subscription = this.route
    //   .data.subscribe(referral => console.log(referral.Name));
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
      Period: {
        StartTime: start,
        EndTime: end
      },
      // Period: {
      //   startTime: start.toJSON(),
      //   endTime: end.toJSON()
      // },
      Status: 'PLANNED',
      ResponsibleUnit: 'AROS'
    };
    console.log(episodeOfCareElement);
    this.episodeOfCareElementService.createEpisodeOfCareElement(episodeOfCareElement).subscribe(data => {
      this.result = data;
    });
  }
}
