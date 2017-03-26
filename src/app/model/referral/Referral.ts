import {Patient} from "../patient/Patient";
import {Encounter} from "../encounter/Encounter";
export interface Referral {
  Id: string;
  Reason: string;
  Status: string;
  Encounter?: Encounter;
  Patient?: string;
  realPatient?: Patient;
}
