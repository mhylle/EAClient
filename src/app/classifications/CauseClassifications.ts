import {Enum} from "./Enum";
export class CauseClassifications extends Enum<String> {
  public static readonly HEAD_AND_CANCER_PACKAGE_START = new Enum("Hoved og halskræft: Pakkeforløg start");
  public static readonly HEAD_AND_CANCER_ELUCIDATION = new Enum("Hoved og halskræft: Udredning");
  public static readonly HEAD_AND_CANCER_DECISION = new Enum("Hoved og halskræft: Beslutning vedrørende initiel behandling");
  public static readonly HEAD_AND_CANCER_INITIAL_TREATMENT_START = new Enum("Hoved og halskræft: Initiel behandling start");
  public static readonly HEAD_AND_CANCER_FOLLOWUP = new Enum("Hoved og halskræft: Opfølgning");
  public static readonly HEAD_AND_CANCER_END = new Enum("Hoved og halskræft: Pakkeforløb slut");
  public static readonly PANCREAS_CANCER_PACKAGE_START = new Enum("Kræft i bugspytkirtlen: Pakkeforløb start");
  public static readonly PANCREAS_CANCER_ELUCIDATION = new Enum("Kræft i bugspytkirtlen: Udredning");
  public static readonly PANCREAS_CANCER_DECISION = new Enum("Kræft i bugspytkirtlen:  Beslutning vedrørende initiel behandling");
  public static readonly PANCREAS_CANCER_INITIAL_TREATMENT_START = new Enum("Kræft i bugspytkirtlen:  Initiel behandling start");
  public static readonly PANCREAS_CANCER_FOLLOWUP = new Enum("Kræft i bugspytkirtlen: Opfølgning");
  public static readonly PANCREAS_CANCER_END = new Enum("Kræft i bugspytkirtlen: Pakkeforløb slut");
}


