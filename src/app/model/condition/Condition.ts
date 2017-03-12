import {Patient} from "../patient/Patient";
import {Encounter} from "../encounter/Encounter";
export interface Condition {
  Id: string;
  Patient?: Patient;
  Encounter?: Encounter;
  Category: string;
  Code: string;

}
