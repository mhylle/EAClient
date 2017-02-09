"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var patient_service_1 = require("../../services/patient.service");
var episodeofcareelement_service_1 = require("../../services/episodeofcareelement.service");
var PatientListComponent = (function () {
    function PatientListComponent(patientService) {
        this.patientService = patientService;
    }
    PatientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.getPatients().subscribe(function (patients) {
            console.log(patients);
            _this.patients = patients;
        });
    };
    PatientListComponent = __decorate([
        core_1.Component({
            selector: 'patient-list-component',
            templateUrl: 'patient.list.component.html',
            styleUrls: ['patient.list.component.css'],
            providers: [patient_service_1.PatientService, episodeofcareelement_service_1.EpisodeOfCareElementService]
        })
    ], PatientListComponent);
    return PatientListComponent;
}());
exports.PatientListComponent = PatientListComponent;