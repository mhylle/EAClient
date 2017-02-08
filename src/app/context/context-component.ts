import {Component, OnInit} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {ContextService} from "../services/context.service";
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'context',
  templateUrl: 'context.component.html',
  styleUrls: ['context.component.css'],
  providers: [ContextService]
})
export class ContextComponent implements OnInit {

  subscription: any;
  private context: Patient;

  constructor(private contextService: ContextService) {
  }

  ngOnInit() {
    this.context = this.contextService.context();
    this.subscription = this.contextService.contextChange.subscribe(item => {
      this.setContext(item);
    })
  }

  setContext(context:Patient) {
    this.context = context;
    console.log("1I am setting context to " + this.context.AlternativeId);
  }

  clearContext() {
    this.context = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
