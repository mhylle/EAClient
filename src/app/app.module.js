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
var patient_list_component_1 = require("./patient/patient-list/patient.list.component");
var patient_component_1 = require("./patient/patient-details/patient.component");
var episodeofcareelement_component_1 = require("./episodeofcareelement/episodeofcareelement-details/episodeofcareelement.component");
var router_1 = require("@angular/router");
var create_patient_component_1 = require("./patient/patient-create/create-patient.component");
var create_episodeofcareelement_component_1 = require("./episodeofcareelement/episodeofcareelement-create/create-episodeofcareelement.component");
var episodeofcare_list_component_1 = require("./episodeofcareelement/episodeofcare-list/episodeofcare-list.component");
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var referral_component_1 = require("./referral/create/referral.component");
var list_referral_component_1 = require("./referral/list/list-referral.component");
var context_component_1 = require("./context/context-component");
var ng2_completer_1 = require("ng2-completer");
var patient_search_component_1 = require("./patient/search/patient-search.component");
var appRoutes = [
    { path: 'list-referrals', component: list_referral_component_1.ListReferralComponent },
    { path: 'referral', component: referral_component_1.CreateReferralComponent },
    { path: 'patients', component: patient_list_component_1.PatientListComponent },
    { path: 'patient/:id', component: patient_component_1.PatientComponent },
    { path: 'createPatient', component: create_patient_component_1.CreatePatientComponent },
    { path: 'createEpisodeOfCareElement', component: create_episodeofcareelement_component_1.CreateEpisodeOfCareElementComponent },
    { path: 'showEpisodeOfCareElement', component: episodeofcare_list_component_1.EpisodeofcareListComponent },
    { path: '', redirectTo: '/patients', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                context_component_1.ContextComponent,
                patient_list_component_1.PatientListComponent,
                patient_component_1.PatientComponent,
                episodeofcareelement_component_1.EpisodeOfCareElementComponent,
                create_patient_component_1.CreatePatientComponent,
                create_episodeofcareelement_component_1.CreateEpisodeOfCareElementComponent,
                episodeofcare_list_component_1.EpisodeofcareListComponent,
                referral_component_1.CreateReferralComponent,
                list_referral_component_1.ListReferralComponent,
                patient_search_component_1.PatientSearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
                ng2_completer_1.Ng2CompleterModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;