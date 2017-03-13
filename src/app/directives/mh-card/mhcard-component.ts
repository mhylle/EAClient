import {Component, OnInit, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mhcard',
  templateUrl: 'mhcard.component.html',
  styleUrls: ['mhcard.component.css'],

})
export class MhCardComponent implements OnInit {
  @Input()
  cardStatus: string;
  @Input()
  cardName: string;
  @Input()
  active: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
