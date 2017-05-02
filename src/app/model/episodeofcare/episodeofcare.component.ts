import {Component, OnDestroy, OnInit} from "@angular/core";
import {EpisodeOfCareService} from "../../services/episodeofcare.service";
import {EpisodeOfCare} from "./EpisodeOfCare";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PatientContextService} from "../../services/patient.context.service";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../patient/Patient";


@Component({
  selector: 'EpisodeOfCare',
  templateUrl: 'episodeofcare.component.html',
  styleUrls: ['episodeofcare.component.css'],
  providers: [EpisodeOfCareService]
})
export class EpisodeOfCareComponent implements OnInit, OnDestroy {

  start: Date = new Date();
  end: Date = new Date();
  episodesOfCare: EpisodeOfCare[];
  pid: number;
  routerParamSubscription: Subscription;
  private patientSubscription: Subscription;
  private patient: Patient;

  constructor(private route: ActivatedRoute, private patientContextService: PatientContextService, private patientService: PatientService, private episodeOfCareService: EpisodeOfCareService) {
    this.start = new Date();
    this.start.setHours(0, 0, 0, 0);
    this.start.setDate(this.start.getDate() - 25);
    this.end = new Date();
    this.end.setHours(23, 59, 59, 999);
    this.end.setDate(this.end.getDate() + 5);
  }

  ngOnInit(): void {
    this.routerParamSubscription = this.route.params.subscribe(params => {
      this.pid = +params['pid'];
      console.log('pid: ' + +params['pid']);
      this.patientService.getPatient("" + this.pid).subscribe(patient => {
        this.patient = patient;
        this.episodeOfCareService.getEpisodesOfCare(this.patient).subscribe(episodesOfCare => {
          console.log('updated episodes of care');
          this.episodesOfCare = episodesOfCare;
          console.log('updated episodes of care1');
          this.patient.EpisodesOfCare = episodesOfCare;
          console.log('setting context');
          this.patientContextService.setContext(this.patient);
        });
      })
    });
  }

  ngOnDestroy() {
    this.routerParamSubscription.unsubscribe();
    this.patientSubscription.unsubscribe();
  }
}




