import {Patient} from "../patient/patient-details/Patient";
export interface Referral {
  Id: string,
  Reason: string;
  Type: string;
  ReferringParty: string;
  OwnChoice: boolean;
  ReferredAt: Date;
  Patient?: Patient;
}
