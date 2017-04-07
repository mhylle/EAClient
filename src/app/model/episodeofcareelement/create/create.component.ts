import {Component, OnInit} from "@angular/core";
import {EpisodeOfCareElementService} from "../../../services/episodeofcareelement.service";
import {ReferralContextService} from "../../../services/referral.context.service";
import {Subscription} from "rxjs";
import {Referral} from "../../referral/Referral";

@Component({
  selector: 'create-episodeofcareelement',
  templateUrl: 'create.component.html',
  styleUrls: ['create.component.css'],
  providers: [EpisodeOfCareElementService]
})
export class CreateEpisodeOfCareElementComponent implements OnInit {

  public episodeOfCareLabel: string;
  public responsibleUnit: string;
  public startTime: any;
  public endTime: any;

  public result: any;
  private referralSubscription: Subscription;
  private referralContext: Referral;

  constructor(private episodeOfCareElementService: EpisodeOfCareElementService,
  private referralContextService: ReferralContextService) {

  }

  ngOnInit(): void {
    this.referralSubscription = this.referralContextService.contextChange.subscribe(context => {
      this.referralContext = context;
      if (this.episodeOfCareLabel == null || this.episodeOfCareLabel == "") {
        this.episodeOfCareLabel = context.Reason;
      }
    });
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
