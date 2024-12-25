interface SkillAttributes {
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
interface EquipmentSlots {
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

interface BossKills {
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

interface UpgradeTiers {
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

interface ProfileAttributes {
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
