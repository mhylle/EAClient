/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientService } from './patient.service';
import {ConditionService} from "./condition.service";

describe('ConditionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionService]
    });
  });

  it('should ...', inject([ConditionService], (service: ConditionService) => {
    expect(service).toBeTruthy();
  }));
});
