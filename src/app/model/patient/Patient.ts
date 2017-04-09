import {EpisodeOfCare} from "../episodeofcare/EpisodeOfCare";
export interface Patient {
  Id?: string;
  AlternativeId: string;
  Name: string;
  Gender: string;
  Birthday?: Date;
  EpisodesOfCare?: EpisodeOfCare[];
  realEpisodesOfCare?: EpisodeOfCare[];
}
