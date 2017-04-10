import {Enum} from "./Enum";
export class OrgCode extends Enum<String> {
  public static readonly OPT_NS_THR_LGRYM = new Enum("Øre-, næse-, halslæge Luisa Grymer");
  public static readonly OPT_FEIS = new Enum("Øjenklinikken Finn Eisgart");
  public static readonly AROS = new Enum("AROS Privathospital");
  public static readonly AAR_KIR_CLI = new Enum("Kirurgisk Klinik Århus");
  public static readonly ODD_OPT_LHANS = new Enum("Odder Øjenklinik ved Lene Hansen");

  public static readonly A662037 = new Enum("Fælles AKUT Afdeling");
  public static readonly A6620371 = new Enum("Fælles AKUT Afdeling");
  public static readonly A6620372 = new Enum("Hospitalsvisitation");
  public static readonly A6620377 = new Enum("Fælles Akut Klinik");
  public static readonly A6620378 = new Enum("Skadestuen Fælles AKUT Afdeling");
  public static readonly A6620379 = new Enum("Center for Voldtægtsofre");
  public static readonly A662044 = new Enum("Rygvisitation Overafd.");
  public static readonly A6620440 = new Enum("Rygvisitation");
  public static readonly A662004 = new Enum("Billeddiagnostisk Overafd. Skejby");
  public static readonly A6620040 = new Enum("Billeddiagnostisk afdeling BDA SKS");
  public static readonly A6620042 = new Enum("MR-Centret SKS");
  public static readonly A662006 = new Enum("Fysioterapi- og Ergoterapi Overafd.");
  public static readonly A6620066 = new Enum("Fysioterapi- og Ergoterapiafdelingen, NBG");
  public static readonly A6620067 = new Enum("Fysioterapi- og Ergoterapiafdelingen, THG");
  public static readonly A6620069 = new Enum("Fysioterapi- og Ergoterapiafdelingen, SKS");
}
