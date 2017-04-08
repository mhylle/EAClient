import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css'],
  providers: []
})

export class TimelineComponent implements OnInit {

  @Input("start")
  start: Date;

  @Input("end")
  end: Date;

  @Input()
  span: string = "d";

  arr = Array;
  private increments: number;

  constructor() {
  }

  ngOnInit(): void {
    let dif = this.end.getTime() - this.start.getTime();
    switch (this.span) {
      case "d":
        this.increments = Math.floor(dif / 1000 / 60 / 60 / 24);
        break;
      case "m":
        this.increments = Math.floor(dif / 1000 / 60 / 60 / 24 / 30);
        break;
      case "y":
        this.increments = Math.floor(dif / 1000 / 60 / 60 / 24 / 365);
        break;
    }
  }
}
