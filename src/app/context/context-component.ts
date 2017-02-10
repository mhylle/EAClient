import {Component, OnInit, OnDestroy} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {ContextService} from "../services/context.service";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'context',
  templateUrl: 'context.component.html',
  styleUrls: ['context.component.css']
})
export class ContextComponent implements OnInit, OnDestroy {
  public patientContext: Patient;
  subscription: Subscription;

  constructor(private contextService: ContextService) {
  }

  ngOnInit() {
    this.subscription = this.contextService.contextChange.subscribe(context => {
      this.patientContext = context;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
