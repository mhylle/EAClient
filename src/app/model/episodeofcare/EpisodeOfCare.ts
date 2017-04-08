import {Period} from "../Period";
export interface EpisodeOfCare {
  Id?: string;
  Patient :string;
  Condition :string;
  Period: Period;
  Status: string;
}
