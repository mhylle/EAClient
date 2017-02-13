import {Patient} from "../patient/Patient";
import {Period} from "../Period";
import {Referral} from "../referral/Referral";
export interface EpisodeOfCareElement {
  Id?: string;
  Status: string;
  ResponsibleUnit: string;
  Period: Period;
  Patient?: Patient;
  Referral?: Referral;
}
