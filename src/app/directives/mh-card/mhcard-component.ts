import {Component, Input, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  moduleId: module.id,
  selector: 'mhcard',
  templateUrl: 'mhcard.component.html',
  styleUrls: ['mhcard.component.css'],
  animations: [
    trigger('activation', [
      state('inactive', style({
        backgroundColor: '#ffffff'
      })),
      state('active',   style({
        backgroundColor: '#e6f5ce'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})
export class MhCardComponent implements OnInit {
  @Input()
  cardStatus: string;
  @Input()
  cardName: string;
  @Input()
  active: string = 'inactive';

  constructor() {
  }

  ngOnInit() {
  }

  toggleActivation() {
    if (this.active == 'inactive') {
      this.active = 'active';
    } else {
      this.active = 'inactive';
    }
  }

}
