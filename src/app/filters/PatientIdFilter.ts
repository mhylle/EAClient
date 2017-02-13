import {Pipe, PipeTransform} from "@angular/core";
import {Referral} from "../model/referral/Referral";

@Pipe({
  name: 'PatientIdFilter',
})

export class PatientIdFilterPipe implements PipeTransform {

  transform(value: Referral[], arg: any): any {
    if (!arg) {
      return value;
    }
    if (!value) {
      return value;
    }

    return value.filter(item => {
      console.log("ItemId: " + item.Id + " aeg: " + arg.Id);
      item.Id === arg.Id
    });
  }
}

