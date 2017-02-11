import {Pipe, PipeTransform} from "@angular/core";
import {Referral} from "../referral/Referral";

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

    return value.filter(item => item.Patient ? item.Patient.Id === arg.Id : false);
  }
}

