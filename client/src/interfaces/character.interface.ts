import {
  iCharacterRace,
  iCharacterSubrace,
  iCharacterBackground,
} from './externalData/externalData.interface';

export interface iAbilityArrayScore {
  score: number;
  bonus: number;
}

export interface iAbilityArray {
  str: iAbilityArrayScore;
  dex: iAbilityArrayScore;
  con: iAbilityArrayScore;
  int: iAbilityArrayScore;
  wis: iAbilityArrayScore;
  cha: iAbilityArrayScore;
}

export interface iCharacter {
  race?: iCharacterRace;
  subrace?: iCharacterSubrace;
  background?: iCharacterBackground;
  abilityArray?: iAbilityArray;
}

export interface iCharacterWizardState {
  character?: iCharacter;
  races?: iCharacterRace[];
}
