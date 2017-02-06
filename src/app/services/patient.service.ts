import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";
import {Patient} from "../patient/patient-details/Patient";
import {EpisodeOfCareElement} from "../episodeofcareelement/episodeofcareelement-details/EpisodeOfCareElement";

@Injectable()
export class PatientService {
  http: any;
  patientsUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.patientsUrl = "http://localhost:8080/EventArchitecture/patients/";
  }

  getPatients() {
    return this.http.get(this.patientsUrl)
      .map(res => res.json());
  }

  createPatient(patient: Patient) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(patient);
    console.log('Create Patient: ' + body)
    return this.http.post(this.patientsUrl, body, {headers: headers});
  }

  addEpisodeOfCareElementToPatient(patient: Patient, episodeOfCareElement: EpisodeOfCareElement) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let pid = patient.Id;
    let eid= episodeOfCareElement.Id;
    console.log("PID: " + pid + " , EID: " + eid);
    return this.http.put(this.patientsUrl + patient.Id + "/episodeofcareelement/" + episodeOfCareElement.Id, {headers: headers});
  }
}
