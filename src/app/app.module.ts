import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PatientListComponent} from "./model/patient/patient-list/patient.list.component";
import {PatientComponent} from "./model/patient/patient-details/patient.component";
import {EpisodeOfCareElementComponent} from "./model/episodeofcareelement/episodeofcareelement-details/episodeofcareelement.component";
import {Routes, RouterModule} from "@angular/router";
import {CreatePatientComponent} from "./model/patient/patient-create/create-patient.component";
import {CreateEpisodeOfCareElementComponent} from "./model/episodeofcareelement/episodeofcareelement-create/create-episodeofcareelement.component";
import {EpisodeofcareListComponent} from "./model/episodeofcareelement/episodeofcare-list/episodeofcare-list.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateReferralComponent} from "./model/referral/create/referral.component";
import {ListReferralComponent} from "./model/referral/list/list-referral.component";
import {ContextComponent} from "./context/context-component";
import {Ng2CompleterModule} from "ng2-completer";
import {PatientSearchComponent} from "./model/patient/search/patient-search.component";
import {ContextService} from "./services/context.service";
import {PatientIdFilterPipe} from "./filters/PatientIdFilter";
import {IdConverterService} from "./utilities/IdConverter";
import {PatientService} from "./services/patient.service";
import {BasicPatientComponent} from "./model/patient/basic/basic";

const appRoutes: Routes = [
  {path: 'list-referrals', component: ListReferralComponent},
  {path: 'referral', component: CreateReferralComponent},
  {path: 'patients', component: PatientListComponent},
  {path: 'patient/:id', component: PatientComponent},
  {path: 'createPatient', component: CreatePatientComponent},
  {path: 'createEpisodeOfCareElement', component: CreateEpisodeOfCareElementComponent},
  {path: 'showEpisodeOfCareElement', component: EpisodeofcareListComponent},
  {path: '', redirectTo: '/patients', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContextComponent,
    PatientListComponent,
    PatientComponent,
    EpisodeOfCareElementComponent,
    CreatePatientComponent,
    CreateEpisodeOfCareElementComponent,
    EpisodeofcareListComponent,
    CreateReferralComponent,
    ListReferralComponent,
    PatientSearchComponent,
    PatientIdFilterPipe,
    BasicPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    Ng2CompleterModule
  ],
  providers: [ContextService, PatientService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
