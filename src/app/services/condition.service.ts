import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/Rx";
import {Condition} from "../model/condition/Condition";

@Injectable()
export class ConditionService {
  http: any;
  conditionsUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.conditionsUrl = "http://localhost:8080/EventArchitecture/conditions/";
  }

  getConditions() {
    return this.http.get(this.conditionsUrl)
      .map(res => res.json());
  }

  createCondition(condition: Condition) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(condition);
    console.log('Create condition: ' + body);
    return this.http.post(this.conditionsUrl, body, {headers: headers});
  }

  getCondition(id: string) {
    return this.http.get(this.conditionsUrl + id)
      .map(res => res.json());
  }
}
