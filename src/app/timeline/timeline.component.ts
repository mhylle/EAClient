import {Component, Input, OnInit} from "@angular/core";
import {EpisodeOfCare} from "../model/episodeofcare/EpisodeOfCare";
import {ConditionService} from "../services/condition.service";
import {ConditionCodes} from "../classifications/ConditionCodes";
import {PatientService} from "../services/patient.service";
import {PatientContextService} from "../services/patient.context.service";
import {Subscription} from "rxjs";
import {Patient} from "../model/patient/Patient";
import {EpisodeOfCareService} from "../services/episodeofcare.service";
import {OrgCode} from "../classifications/OrgCode";
import {EpisodeOfCareElement} from "../model/episodeofcareelement/EpisodeOfCareElement";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css'],
  providers: [ConditionService],

  animations: [
    trigger('shrinkOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({opacity: 0}))
      ])
    ])
  ]
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

  private episodeOfCareElementsVisibility: Map<string, boolean> = new Map<string, boolean>();
  // private episodeOfCareElementsVisibility: {[key:string]: boolean;} ={};

  private convertedConditionCode: string;


  constructor(private patientContextService: PatientContextService, private patientService: PatientService, private episodeOfCareService: EpisodeOfCareService, private conditionService: ConditionService) {
  }

  ngOnInit(): void {
    this.patientSubscription = this.patientContextService.contextChange.subscribe(context => {
      this.patientContext = context;

      try {
        this.episodesOfCare = context.EpisodesOfCare;
        for (let i = 0; i < this.episodesOfCare.length; i++) {
          this.episodeOfCareElementsVisibility.set(this.episodesOfCare[i], false);
        }
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

  hasEpisodeOfCareElementContent(date: Date, episodeOfCareElement: EpisodeOfCareElement): boolean {
    let result = false;
    if (episodeOfCareElement != null) {
      if (episodeOfCareElement.Period.StartTime != null) {
        let myDate = new Date(episodeOfCareElement.Period.StartTime);
        let start = new Date();
        start.setHours(0, 0, 0, 0);
        start.setFullYear(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
        console.log(date);
        if (start.getTime() <= date.getTime()) {
          if (episodeOfCareElement.Period.EndTime != null) {
            let myDate = new Date(episodeOfCareElement.Period.EndTime);
            let end = new Date();
            end.setHours(0, 0, 0, 0);
            end.setFullYear(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
            if (end.getTime() >= date.getTime()) {
              result = true;
            }
          } else {
            result = true;
          }
        }
      }
    }
    return result;
  }

  hasEpisodeOfCareContent(date: Date, episodeOfCare: EpisodeOfCare): boolean {
    let result = false;
    if (episodeOfCare != null) {
      if (episodeOfCare.Period.StartTime != null) {
        let myDate = new Date(episodeOfCare.Period.StartTime);
        let start = new Date();
        start.setHours(0, 0, 0, 0);
        start.setFullYear(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
        if (start.getTime() <= date.getTime()) {
          if (episodeOfCare.Period.EndTime != null) {
            let myDate = new Date(episodeOfCare.Period.EndTime);
            let end = new Date();
            end.setHours(0, 0, 0, 0);
            end.setFullYear(myDate.getFullYear(), myDate.getMonth(), myDate.getDate());
            if (end.getTime() >= date.getTime()) {
              result = true;
            }
          } else {
            result = true;
          }
        }
      }
    }
    return result;
  }

  convertConditionCode(condition) {
    for (let item in ConditionCodes) {
      if (condition === item) {
        return ConditionCodes[item];
      }
    }
  }

  convertSorCode(sorCode) {
    for (let item in OrgCode) {
      if (sorCode === item) {
        return OrgCode[item];
      }
    }
  }

  showEpisodeOfCareElements(episodeOfCare: EpisodeOfCare) {
    return this.episodeOfCareElementsVisibility.get(episodeOfCare.Id)
  }

  toggleEpisodeOfCareElements(episodeOfCare: EpisodeOfCare) {
    this.episodeOfCareElementsVisibility.set(episodeOfCare.Id, !this.episodeOfCareElementsVisibility.get(episodeOfCare.Id));
  }
}
