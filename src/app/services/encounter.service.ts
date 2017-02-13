import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {Referral} from "../model/referral/Referral";
import {Encounter} from "../model/encounter/Encounter";

@Injectable()
export class EncounterService {
  http: any;
  encounterUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.encounterUrl = "http://localhost:8080/EventArchitecture/encounters/";
  }

  getEncounters() {
    return this.http.get(this.encounterUrl)
      .map(res => res.json());
  }
  getEncounter(id: string) {
    return this.http.get(this.encounterUrl + id)
      .map(res => res.json());
  }

  createEncounter(encounter: Encounter) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let args = JSON.stringify(encounter);
    return this.http.post(this.encounterUrl, args, {headers: headers});
  }
}
