import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {Referral} from "../model/referral/Referral";

@Injectable()
export class ReferralService {
  http: any;
  referralUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.referralUrl = "http://localhost:8080/EventArchitecture/referrals/";
  }

  getReferrals() {
    return this.http.get(this.referralUrl)
      .map(res => res.json());
  }

  createEpisodeOfCareElement(referral: Referral) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let args = JSON.stringify(referral);
    console.log(args)
    return this.http.post(this.referralUrl, args, {headers: headers});
  }

  receiveReferral(referral: Referral) {
    return this.http.get(this.referralUrl + referral.Id + "/receive")
      .map(res => res.json());

  }
}
