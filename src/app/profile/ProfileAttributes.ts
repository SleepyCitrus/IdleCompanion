export interface SkillAttributes {
  agility: number;
  archery: number;
  attack: number;
  brewing: number;
  carpentry: number;
  crafting: number;
  defence: number;
  enchanting: number;
  farming: number;
  fishing: number;
  foraging: number;
  magic: number;
  plundering: number;
  smithing: number;
  strength: number;
  woodcutting: number;
}

// Each slot is the ID of the equipped item
export interface EquipmentSlots {
  ammunition: number;
  amulet: number;
  belt: number;
  body: number;
  boots: number;
  bracelet: number;
  cape: number;
  earrings: number;
  gloves: number;
  head: number;
  jewellery: number;
  leftHand: number;
  legs: number;
  pet: number;
  rightHand: number;
}

export interface BossKills {
  Chimera: number;
  Devil: number;
  Griffin: number;
  GuardiansOfTheCitadel: number;
  Hades: number;
  Kronos: number;
  MalignantSpider: number;
  Medusa: number;
  OtherworldlyGolem: number;
  ReckoningOfTheGods: number;
  SkeletonWarrior: number;
  Zeus: number;
}

export interface UpgradeTiers {
  "ammo-saver": number;
  ancientWisdom: number;
  arrowCrafter: number;
  autoEating: number;
  autoLooting: number;
  betterFisherman: number;
  betterLumberjack: number;
  betterSkinner: number;
  bossSlayer: number;
  delicateManufacturing: number;
  extraLoadouts: number;
  farmingTrickery: number;
  gettingInSync: number;
  housing: number;
  keepItBurning: number;
  keepItSpacious: number;
  "kronosWho?": number;
  lastNegotiation: number;
  lazyRaider: number;
  masterCrafter: number;
  monsterHunter: number;
  mostEfficientFisherman: number;
  ninja: number;
  offlineProgress: number;
  pickyEater: number;
  plankBargain: 1;
  powerForager: number;
  prestigiousWoodworking: number;
  responsibleDrinking: number;
  showUsTheMoney: number;
  smeltingMagic: number;
  teamwork: number;
  theFisherman: number;
  theLumberjack: number;
  toolbeltUpgrade: number;
  upgrade_bounty_hunter: number;
  valuedClanMember: number;
}

export interface ProfileAttributes {
  enchantmentBoosts: SkillAttributes;
  equipment: EquipmentSlots;

  // "default" or "ironman"
  gameMode: string;

  // e.g. "ShowerWithSocks"
  guildName: string;
  pvmStats: BossKills;
  skillExperiences: SkillAttributes;
  upgrades: UpgradeTiers;

  // e.g. "VexingCitrus"
  username: string;
}

export const fullUpgradeTiers = {
  // Max stage for each upgrade
  housing: 5,
  keepItSpacious: 190,
  theLumberjack: 5,
  theFisherman: 4,
  autoEating: 1,
  autoLooting: 1,
  offlineProgress: 6,
  valuedClanMember: 1,
  farmingTrickery: 5,
  powerForager: 5,
  smeltingMagic: 3,
  mostEfficientFisherman: 5,
  plankBargain: 3,
  "ammo-saver": 6,
  ninja: 4,
  monsterHunter: 1,
  teamwork: 1,
  bossSlayer: 1,
  toolbeltUpgrade: 6,
  lazyRaider: 1,
  ancientWisdom: 1,
  masterCrafter: 1,
  extraLoadouts: 15,
  "kronosWho?": 1,
  keepItBurning: 1,
  betterSkinner: 1,
  betterFisherman: 1,
  betterLumberjack: 1,
  arrowCrafter: 1,
  delicateManufacturing: 1,
  responsibleDrinking: 1,
  lastNegotiation: 1,
  showUsTheMoney: 1,
  pickyEater: 1,
  prestigiousWoodworking: 1,
  gettingInSync: 1,
  upgrade_bounty_hunter: 1,
};
