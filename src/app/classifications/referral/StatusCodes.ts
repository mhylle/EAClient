import {Enum} from "../Enum";
export class StatusCodes extends Enum<String> {
  public static readonly DRAFT = new Enum("Draft");
  public static readonly REQUESTED = new Enum("Requested");
  public static readonly ACTIVE = new Enum("Active");
  public static readonly CANCELLED = new Enum("Cancelled");
  public static readonly ACCEPTED = new Enum("Accepted");
  public static readonly REJECTED = new Enum("Rejected");
}
