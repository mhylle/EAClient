import {Component, OnInit} from "@angular/core";

import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../model/patient/Patient";
import {EpisodeOfCareService} from "../../services/episodeofcare.service";
import {EpisodeOfCare} from "../../model/episodeofcare/EpisodeOfCare";

@Component({
  selector: 'compare',
  templateUrl: 'comparedate.component.html',
  styleUrls: ['comparedate.component.css'],
  providers: [EpisodeOfCareService],
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

export class CompareDateComponent implements OnInit {
  private pid: string;
  private routerParamSubscription: Subscription;
  private compareDatePatient: Patient;
  private compareDateEpisodesOfCare: any[];
  episodeOfCare: EpisodeOfCare;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private episodeOfCareService: EpisodeOfCareService) {
  }

  ngOnInit(): void {
    this.routerParamSubscription = this.route.params.subscribe(params => {
      this.pid = params['pid'];
      console.log('pid: ' + +params['pid']);
      this.patientService.getPatient("" + this.pid).subscribe(patient => {
        if (patient != null) {
          this.compareDatePatient = patient;
          this.episodeOfCareService.getEpisodesOfCare(this.compareDatePatient).subscribe(episodesOfCare => {
               this.compareDateEpisodesOfCare = episodesOfCare;

            // for (let i = 0; i < episodeOfCareElements.length; i++) {
            //   let episodeOfCareElement = episodeOfCareElements[i];
            //
            // }

            // //   console.log('updated episodes of care');
            // //   this.episodesOfCare = episodesOfCare;
            // //   console.log('updated episodes of care1');
            // //   this.compareDatePatient.EpisodesOfCare = episodesOfCare;
            // //   console.log('setting context');
            // //   this.patientContextService.setContext(this.compareDatePatient);
          });
        }
      })
    });
  }
}
