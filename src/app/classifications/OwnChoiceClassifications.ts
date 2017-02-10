import {Enum} from "./Enum";
export class OwnChoiceClassifications extends Enum<String> {
  public static readonly ALDB00 = new Enum("Intet fritvalg");
  public static readonly ALDB01 = new Enum("Frit sygehusvalg");
  public static readonly ALDB02 = new Enum("Udvidet frit sygehusvalg");

}


