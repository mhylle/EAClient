import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PatientListComponent} from "./patient/patient-list/patient.list.component";
import {PatientComponent} from "./patient/patient-details/patient.component";
import {EpisodeOfCareElementComponent} from "./episodeofcareelement/episodeofcareelement-details/episodeofcareelement.component";
import {Routes, RouterModule} from "@angular/router";
import {CreatePatientComponent} from "./patient/patient-create/create-patient.component";
import {CreateEpisodeOfCareElementComponent} from "./episodeofcareelement/episodeofcareelement-create/create-episodeofcareelement.component";
import {EpisodeofcareListComponent} from "./episodeofcareelement/episodeofcare-list/episodeofcare-list.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateReferralComponent} from "./referral/create/referral.component";
import {ListReferralComponent} from "./referral/list/list-referral.component";
import {ContextComponent} from "./context/context-component";
import {Ng2CompleterModule} from "ng2-completer";
import {PatientSearchComponent} from "./patient/search/patient-search.component";
import {ContextService} from "./services/context.service";

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
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    Ng2CompleterModule
  ],
  providers: [ContextService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
