import {Directive, ViewContainerRef} from "@angular/core";
@Directive({selector: '[dialogAnchor]'})
export class DialogAnchorDirectice {
  constructor(private viewContainer: ViewContainerRef) {

  }
}

