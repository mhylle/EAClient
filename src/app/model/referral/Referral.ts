import {Patient} from "../patient/Patient";
import {Encounter} from "../encounter/Encounter";
import {StatusCodes} from "../../classifications/referral/StatusCodes";
export interface Referral {
  Id: string;
  Reason: string;
  Status: StatusCodes;
  Encounter?: Encounter;
  Patient?: string;
  realPatient?: Patient;
}
