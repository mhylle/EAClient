"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var patient_list_component_1 = require("./patient-list-component/patient.list.component");
var patient_component_1 = require("./patient/patient.component");
var episodeofcareelement_component_1 = require("./episodeofcareelement/episodeofcareelement.component");
var router_1 = require("@angular/router");
var create_patient_component_1 = require("./create-patient/create-patient.component");
var create_episodeofcareelement_component_1 = require("./create-episodeofcareelement/create-episodeofcareelement.component");
var appRoutes = [
    { path: 'patients', component: patient_list_component_1.PatientListComponent },
    { path: 'patient/:id', component: patient_component_1.PatientComponent },
    { path: 'createPatient', component: create_patient_component_1.CreatePatientComponent },
    { path: 'createEpisodeOfCareElement', component: create_episodeofcareelement_component_1.CreateEpisodeOfCareElementComponent },
    { path: '', redirectTo: '/patients', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                patient_list_component_1.PatientListComponent,
                patient_component_1.PatientComponent,
                episodeofcareelement_component_1.EpisodeOfCareElementComponent,
                create_patient_component_1.CreatePatientComponent,
                create_episodeofcareelement_component_1.CreateEpisodeOfCareElementComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
