import {Component, OnInit, Input, Output} from "@angular/core";
import {Patient} from "../patient/patient-details/Patient";

@Component({
  moduleId: module.id,
  selector: 'context',
  templateUrl: 'context.component.html',
  styleUrls: ['context.component.css'],
})
export class ContextComponent implements OnInit {
  @Output()
  private context: Patient;

  constructor() {
  }

  ngOnInit() {
  }

  setContext(context:Patient) {
    this.context = context;
    console.log("I am setting context to " + this.context.AlternativeId);
  }

  clearContext() {
    this.context = null;
  }

}
