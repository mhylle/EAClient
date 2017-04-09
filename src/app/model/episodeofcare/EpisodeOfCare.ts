import {Period} from "../Period";
import {Condition} from "../condition/Condition";
import {Patient} from "../patient/Patient";
import {EpisodeOfCareElement} from "../episodeofcareelement/EpisodeOfCareElement";
export interface EpisodeOfCare {
  Id?: string;
  EpisodeOfCareElements :EpisodeOfCareElement[];
  Condition :string;
  Period: Period;
  Status: string;
  realCondition?: Condition;
  realPatient?: Patient;
  realEpisodeOfCareElements?: EpisodeOfCareElement[];
}
