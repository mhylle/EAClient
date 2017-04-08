import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Patient} from "../model/patient/Patient";

@Injectable()
export class EpisodeOfCareService {
  http: any;
  patientsUrl: string;
  episodeOfCareUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.patientsUrl = "http://localhost:8080/EventArchitecture/patients/";
    this.episodeOfCareUrl = "http://localhost:8080/EventArchitecture/episodesOfCare/";
  }

  getEpisodesOfCare(patient: Patient) {
    return this.http.get(this.episodeOfCareUrl)
      .map(res => res.json());
  }
}
