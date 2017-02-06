"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var patient_service_1 = require("../services/patient.service");
var CreatePatientComponent = (function () {
    function CreatePatientComponent(patientService) {
        this.patientService = patientService;
    }
    CreatePatientComponent.prototype.onSubmit = function () {
        var _this = this;
        var patient = {
            Name: this.Name,
            AlternativeId: this.AlternativeId
        };
        this.patientService.createPatient(patient).subscribe(function (data) {
            _this.result = data;
        });
    };
    CreatePatientComponent = __decorate([
        core_1.Component({
            selector: 'create-patient',
            templateUrl: 'create-patient.component.html',
            styleUrls: ['create-patient.component.css'],
            providers: [patient_service_1.PatientService]
        })
    ], CreatePatientComponent);
    return CreatePatientComponent;
}());
exports.CreatePatientComponent = CreatePatientComponent;
