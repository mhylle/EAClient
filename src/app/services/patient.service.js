"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var PatientService = (function () {
    function PatientService(http) {
        this.http = http;
        this.patientsUrl = "http://localhost:8080/EventArchitecture/patients/";
    }
    PatientService.prototype.getPatients = function () {
        return this.http.get(this.patientsUrl)
            .map(function (res) { return res.json(); });
    };
    PatientService.prototype.createPatient = function (patient) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify(patient);
        console.log('Create Patient: ' + body);
        return this.http.post(this.patientsUrl, body, { headers: headers });
    };
    PatientService.prototype.addEpisodeOfCareElementToPatient = function (patient, episodeOfCareElement) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var pid = patient.Id;
        var eid = episodeOfCareElement.Id;
        console.log("PID: " + pid + " , EID: " + eid);
        return this.http.put(this.patientsUrl + patient.Id + "/episodeofcareelement/" + episodeOfCareElement.Id, { headers: headers });
    };
    PatientService = __decorate([
        core_1.Injectable()
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;