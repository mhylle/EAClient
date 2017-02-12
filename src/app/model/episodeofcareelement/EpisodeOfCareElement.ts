import {Patient} from "../patient/Patient";
import {Period} from "../Period";
export interface EpisodeOfCareElement {
  Id?: string;
  Status: string;
  ResponsibleUnit: string;
  Patient?: Patient;
  Period: Period;
}
