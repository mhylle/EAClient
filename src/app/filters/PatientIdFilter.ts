import {Pipe, PipeTransform, Injectable} from '@angular/core';
import {Patient} from "../patient/patient-details/Patient";

@Pipe({
  name: 'PatientIdFilter'
})

@Injectable()
export class PatientIdFilterPipe implements PipeTransform {
  transform(value: Patient[], args: any[]): any {
    return value.filter(item => {
      args.length > 0 ? item.Id === (args[0].Id) : true;
    });
  }
}
