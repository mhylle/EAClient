import {Patient} from "../patient/patient-details/Patient";
export interface Referral {
  Cause: string;
  Type: string;
  ReferringParty: string;
  OwnChoice: boolean;
  ReferredAt: Date;
  Patient?: Patient;
}
