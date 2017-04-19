import {EpisodeOfCare} from "../episodeofcare/EpisodeOfCare";
import {EpisodeOfCareElement} from "../episodeofcareelement/EpisodeOfCareElement";
export interface Patient {
  EpisodeOfCareElements?: EpisodeOfCareElement[];
  Id?: string;
  AlternativeId: string;
  Name: string;
  Gender: string;
  Birthday?: Date;
  EpisodesOfCare?: EpisodeOfCare[];
  realEpisodesOfCare?: EpisodeOfCare[];
}
