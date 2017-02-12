import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {EpisodeOfCareElement} from "../model/episodeofcareelement/EpisodeOfCareElement";

@Injectable()
export class EpisodeOfCareElementService {
  http: any;
  episodeOfCareElementUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.episodeOfCareElementUrl = "http://localhost:8080/EventArchitecture/episodeofcareelements/";
  }

  getEpisodeOfCareElements() {
    return this.http.get(this.episodeOfCareElementUrl)
      .map(res => res.json());
  }

  createEpisodeOfCareElement(episodeOfCareElement: EpisodeOfCareElement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let args = JSON.stringify(episodeOfCareElement);
    console.log(args)
    return this.http.post(this.episodeOfCareElementUrl, args, {headers: headers});
  }
}
