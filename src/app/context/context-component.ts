import {Component, OnInit, OnDestroy} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";
import {ContextService} from "../services/context.service";

@Component({
  moduleId: module.id,
  selector: 'context',
  templateUrl: 'context.component.html',
  styleUrls: ['context.component.css'],
  providers: [ContextService]
})
export class ContextComponent implements OnInit, OnDestroy {
  public patientContext: Patient;

  constructor(private contextService: ContextService) {
  }

  ngOnInit() {
    this.contextService.context.subscribe(context => {
      console.log("subscription...");
      this.patientContext = context;
      if (this.patientContext != null) {
        console.log("1I am setting context to " + this.patientContext.AlternativeId);
      } else {
        console.log("NO context yet");
      }
    });
  }

  ngOnDestroy() {
  }

}
