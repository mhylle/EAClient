import {Enum} from "./Enum";
export class ReasonClassifications extends Enum<String> {
  public static readonly HEAD_AND_CANCER_PACKAGE_START = new Enum("Hoved og halskræft: Pakkeforløb start");
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


  public static readonly AAF= new Enum("Booking");
  public static readonly AAF1= new Enum("Indlæggelse");
  public static readonly AAF11= new Enum("Genindlæggelse");
  public static readonly AAF12= new Enum("Indlæggelse i brugerstyret seng");
  public static readonly AAF13= new Enum("Udskrivning fra brugerstyret seng");
  public static readonly AAF2= new Enum("Ambulant");
  public static readonly AAF20= new Enum("Forundersøgelse");
  public static readonly AAF21= new Enum("Førstegangsbesøg");
  public static readonly AAF22= new Enum("Ambulant besøg");
  public static readonly AAF23= new Enum("Kontrolbesøg");
  public static readonly AAF3= new Enum("Skadestuebesøg");
  public static readonly AAF4= new Enum("Tilsyn");
  public static readonly AAF5= new Enum("Telefonkontakt");
  public static readonly AAF6= new Enum("Hjemmebesøg");
  public static readonly AAF7= new Enum("Udebesøg");
  public static readonly AAF8= new Enum("Andre 'booking/henvisning'");
  public static readonly AAF81= new Enum("Planlagt fødsel");
  public static readonly AAF82= new Enum("Virksomhedsbesøg");
  public static readonly AAF83= new Enum("Institutionsbesøg");
  public static readonly AAF84= new Enum("Stuegang");
  public static readonly AAF85= new Enum("Henvisning uden tidsbestilling (drop in)");
  public static readonly AAF9= new Enum("Administrativ kontakt");

}


