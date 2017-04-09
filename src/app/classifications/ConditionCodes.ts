import {Enum} from "./Enum";
export class ConditionCodes extends Enum<String> {
  public static readonly DI200B = new Enum("Klinisk vurderet ustabil angina pectoris");
  public static readonly DI200C = new Enum("Ustabil angina pectoris med dokumenteret iskæmi");
  public static readonly DM54 = new Enum("Rygsmerter");
  public static readonly DM540 = new Enum("Pannikulitis i nakken eller ryggen");
  public static readonly DM540A = new Enum("Pannikulitis i nakken");
  public static readonly DM540B = new Enum("Pannikulitis i ryggen");
  public static readonly DM541 = new Enum("Radikulopati UNS");
  public static readonly DM541A = new Enum("Radiculitis lumbosacralis");
  public static readonly DM541B = new Enum("Radiculitis lumbalis");
  public static readonly DM541C = new Enum("Radiculitis brachialis");
  public static readonly DM541D = new Enum("Radiculitis thoracalis");
  public static readonly DM542 = new Enum("Cervikale rygsmerter");
  public static readonly DM543 = new Enum("Ischias");
  public static readonly DM544 = new Enum("Lændesmerter med ischias");
  public static readonly DM545 = new Enum("Lændesmerter UNS");
  public static readonly DM546 = new Enum("Torakale rygsmerter");
  public static readonly DM548 = new Enum("Andre rygsmerter");
  public static readonly DM549 = new Enum("Rygsmerter UNS");
  public static readonly DR07 = new Enum("Smerter i hals og bryst");
  public static readonly DR070 = new Enum("Smerter i svælg");
  public static readonly DR071 = new Enum("Smerter i thorax ved vejrtrækning");
  public static readonly DR072 = new Enum("Prækordialsmerter");
  public static readonly DR073 = new Enum("Andre brystsmerter");
  public static readonly DR074 = new Enum("Brystsmerter UNS");


}


