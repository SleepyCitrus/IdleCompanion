export interface CharacterProfileInterface {
  username: string;
  // "default" for regular accounts
  // "ironman" for ironmen accounts
  gameMode: string;
  guildName: string;
  skillExperiences: {
    // Cumulative exp of each skill
    attack: number;
    strength: number;
    defence: number;
    archery: number;
    magic: number;
    health: number;
    crafting: number;
    woodcutting: number;
    carpentry: number;
    fishing: number;
    cooking: number;
    mining: number;
    smithing: number;
    foraging: number;
    farming: number;
    agility: number;
    plundering: number;
    enchanting: number;
    brewing: number;
    exterminating: number;
  };
  equipment: {
    // Id number of the equipped item or -1 if none
    boots: number;
    jewellery: number;
    gloves: number;
    legs: number;
    body: number;
    leftHand: number;
    rightHand: number;
    amulet: number;
    ammunition: number;
    cape: number;
    head: number;
    bracelet: number;
    belt: number;
    pet: number;
    earrings: number;
  };
  enchantmentBoosts: {
    // Percent (%) boosts from enchantments
    agility: number;
    enchanting: number;
    plundering: number;
    smithing: number;
    farming: number;
    crafting: number;
    magic: number;
    defence: number;
    foraging: number;
    attack: number;
    strength: number;
    archery: number;
    mining: number;
    brewing: number;
    fishing: number;
    woodcutting: number;
  };
  upgrades: {
    // Upgrade stage from local market, 0 if not unlocked
    housing: number;
    keepItSpacious: number;
    theLumberjack: number;
    theFisherman: number;
    autoEating: number;
    autoLooting: number;
    offlineProgress: number;
    valuedClanMember: number;
    farmingTrickery: number;
    powerForager: number;
    smeltingMagic: number;
    mostEfficientFisherman: number;
    plankBargain: number;
    "ammo-saver": number;
    ninja: number;
    monsterHunter: number;
    teamwork: number;
    bossSlayer: number;
    toolbeltUpgrade: number;
    lazyRaider: number;
    ancientWisdom: number;
    masterCrafter: number;
    extraLoadouts: number;
    "kronosWho?": number;
    keepItBurning: number;
    betterSkinner: number;
    betterFisherman: number;
    betterLumberjack: number;
    arrowCrafter: number;
    delicateManufacturing: number;
    responsibleDrinking: number;
    lastNegotiation: number;
    showUsTheMoney: number;
    pickyEater: number;
    prestigiousWoodworking: number;
    gettingInSync: number;
    upgrade_bounty_hunter: number;
  };
  pvmStats: {
    // Number of kills/clears for each monster/raid
    Griffin: number;
    Devil: number;
    Hades: number;
    Zeus: number;
    Medusa: number;
    Chimera: number;
    Kronos: number;
    ReckoningOfTheGods: number;
    GuardiansOfTheCitadel: number;
    MalignantSpider: number;
    SkeletonWarrior: number;
    OtherworldlyGolem: number;
  };
}

export const fullUpgrades = {
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
