import {EpisodeOfCareElement} from "../episodeofcareelement/EpisodeOfCareElement";
export interface Patient {
  Id?: string;
  AlternativeId: string;
  Name: string;
  Gender: string;
  Birthday?: Date;
  EpisodeOfCareElements?: EpisodeOfCareElement[];
}
