"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PatientComponent = (function () {
    function PatientComponent(patientService, episodeOfCareElementService) {
        this.patientService = patientService;
        this.episodeOfCareElementService = episodeOfCareElementService;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.episodeOfCareElementService.getEpisodeOfCareElements().subscribe(function (episodeOfCareElements) {
            console.log(episodeOfCareElements);
            _this.eocElms = episodeOfCareElements;
        });
    };
    PatientComponent.prototype.addEoCElement = function () {
        var _this = this;
        this.patientService.addEpisodeOfCareElementToPatient(this.patient, this.selectedEoc).subscribe(function (result) {
            _this.result = result;
        });
    };
    __decorate([
        core_1.Input()
    ], PatientComponent.prototype, "patient", void 0);
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patient',
            templateUrl: 'patient.component.html',
            styleUrls: ['patient.component.css']
        })
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
