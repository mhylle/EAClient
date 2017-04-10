import {Component, Input, OnInit} from "@angular/core";
import {EpisodeOfCare} from "../model/episodeofcare/EpisodeOfCare";
import {ConditionService} from "../services/condition.service";
import {ConditionCodes} from "../classifications/ConditionCodes";
import {PatientService} from "../services/patient.service";
import {PatientContextService} from "../services/patient.context.service";
import {Subscription} from "rxjs";
import {Patient} from "../model/patient/Patient";
import {EpisodeOfCareService} from "../services/episodeofcare.service";

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css'],
  providers: [ConditionService]
})

export class TimelineComponent implements OnInit {
  private patientSubscription: Subscription;
  @Input()
  start: Date;
  @Input()
  end: Date;


  @Input()
  span: string = "d";
  units: Date[] = [];
  private increments: number;

  private patientContext: Patient;
  private episodesOfCare: any[];

  private convertedConditionCode: string;


  constructor(private patientContextService: PatientContextService, private patientService: PatientService, private episodeOfCareService: EpisodeOfCareService, private conditionService: ConditionService) {
  }

  ngOnInit(): void {
    this.patientSubscription = this.patientContextService.contextChange.subscribe(context => {
      this.patientContext = context;

      try {
        this.episodesOfCare = context.EpisodesOfCare;
      } catch (e) {
        console.log(e);
      }

      if (this.end == null) {
        this.end = new Date();
        this.end.setDate(this.end.getDate() + 2);
      }

      let endTime = this.end.getTime();
      let startTime = this.start.getTime();
      let dif = endTime - startTime;
      console.log(dif);
      switch (this.span) {
        case "d":
          this.increments = Math.floor(dif / 1000 / 60 / 60 / 24);
          console.log(this.increments);
          for (let i = 0; i < this.increments; i++) {
            let unit = new Date();
            unit.setTime(this.start.getTime());
            unit.setDate(this.start.getDate() + i)
            this.units.push(unit);
          }
          break;
        case "m":
          this.increments = Math.floor(dif / 1000 / 60 / 60 / 24 / 30);
          break;
        case "y":
          this.increments = Math.floor(dif / 1000 / 60 / 60 / 24 / 365);
          break;
      }


      // if (svc == null) {
      //   svc = this.episodeOfCareService.getEpisodeOfCare(id);
      //   tmpSvc = this.episodeOfCareService.getEpisodeOfCare(id);
      // } else {
      //   tmpSvc.concat(this.episodeOfCareService.getEpisodeOfCare(id));
      // }
      // }

      // this.episodeOfCareService.getEpisodeOfCare(id).subscribe(episodeOfCare => {
      //   this.patientContext.realEpisodesOfCare.push(episodeOfCare);
      //   if (this.start == null || this.start > episodeOfCare.Period.StartTime) {
      //     this.start = episodeOfCare.Period.StartTime;
      //   }
      //   if (this.end == null || this.start < episodeOfCare.Period.EndTime) {
      //     this.end = episodeOfCare.Period.EndTime;
      //   }
      // });


      if (this.episodesOfCare) {
        for (let i = 0; i < this.episodesOfCare.length; i++) {
          let episodeOfCare = this.episodesOfCare[i];
          this.conditionService.getCondition(episodeOfCare.Condition).subscribe(condition => {
              console.log("condition set");
              episodeOfCare.realCondition = condition;
            }
          );
          this.patientService.getPatient(episodeOfCare.Patient).subscribe(patient => {
              console.log("patient set");
              episodeOfCare.realPatient = patient;
            }
          )
        }
      }
    });
  }

  chainRetrieveEpisodesOfCare() {

  }

  hasContent(date: Date, episodeOfCare: EpisodeOfCare): boolean {
    let result = false;
    // if (episodeOfCare.realPatient != null) {
    //   let episodesOfCare= episodeOfCare.realPatient.EpisodesOfCare;
    //   if (episodesOfCare != null) {
    //     for (let i = 0; i < episodesOfCare.length; i++) {
    //       let episodeOfCare = episodesOfCare[i];
    //       if (episodeOfCare.Period.StartTime.getTime() <= date.getTime()) {
    //         if (episodeOfCareElement.Period.EndTime != null) {
    //           if (episodeOfCareElement.Period.EndTime.getTime() >= date.getTime()) {
    //             console.log("result was true1");
    //             result = true;
    //           } else {
    //             console.log("result was false1");
    //             result = false;
    //           }
    //         } else {
    //           console.log("result was true2");
    //           result = true;
    //         }
    //       }
    //     }
    //   }
    // }
    return result;
  }

  convertConditionCode(condition) {
      for (let item in ConditionCodes) {
        if (condition === item) {
          return ConditionCodes[item];
        }
      }
  }
}
