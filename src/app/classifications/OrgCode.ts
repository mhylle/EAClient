import {Enum} from "./Enum";
export class OrgCode extends Enum<String> {
  public static readonly OPT_NS_THR_LGRYM = new Enum("Øre-, næse-, halslæge Luisa Grymer");
  public static readonly OPT_FEIS = new Enum("Øjenklinikken Finn Eisgart");
  public static readonly AROS = new Enum("AROS Privathospital");
  public static readonly AAR_KIR_CLI = new Enum("Kirurgisk Klinik Århus");
  public static readonly ODD_OPT_LHANS = new Enum("Odder Øjenklinik ved Lene Hansen");
}
