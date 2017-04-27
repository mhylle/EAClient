import {Component, OnInit} from "@angular/core";
import {EpisodeOfCareService} from "../../services/episodeofcare.service";
import {EpisodeOfCare} from "./EpisodeOfCare";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PatientContextService} from "../../services/patient.context.service";
import {PatientService} from "../../services/patient.service";


@Component({
  selector: 'EpisodeOfCare',
  templateUrl: 'episodeofcare.component.html',
  styleUrls: ['episodeofcare.component.css'],
  providers: [EpisodeOfCareService]
})
export class EpisodeOfCareComponent implements OnInit {

  start: Date = new Date();
  end: Date = new Date();
  episodesOfCare: EpisodeOfCare[];
  pid: number;
  routerParamSubscription: Subscription;
  private patientSubscription: Subscription;

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
        this.patientContextService.setContext(patient);
      })
    });

    this.patientSubscription = this.patientContextService.contextChange.subscribe(context => {
      console.log('got a new context');
      this.episodeOfCareService.getEpisodesOfCare(context).subscribe(episodesOfCare => {
        console.log('updated episodes of care');
        this.episodesOfCare = episodesOfCare;
      });

    });
    // TODO: use patient context.
  }

  ngOnDestroy() {
    this.routerParamSubscription.unsubscribe();
    this.patientSubscription.unsubscribe();
  }
}




