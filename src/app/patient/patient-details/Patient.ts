import {EpisodeOfCareElement} from "../../episodeofcareelement/episodeofcareelement-details/EpisodeOfCareElement";
export interface Patient {
  Id?: string;
  Name: string;
  AlternativeId: string;
  EpisodeOfCareElements?: EpisodeOfCareElement[];
}
