import {Patient} from "../patient/Patient";
import {Period} from "../Period";
export interface Encounter {
  Id: string;
  Status: string;
  EncounterClass: string;
  Patient?: Patient;
  Period?: Period;
}
