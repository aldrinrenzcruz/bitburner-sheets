// new Augmentation({
//   name: AugmentationNames.UnnamedAug2,
//   repCost: 500e3,
//   moneyCost: 5e9,
//   info: "Undecided description",
//   startingMoney: 100e6,
//   programs: [Programs.HTTPWormProgram.name, Programs.SQLInjectProgram.name],
//   factions: [FactionNames.OmniTekIncorporated],
// }),



export const initBladeburnerAugmentations = (): Augmentation[] => [


  new Augmentation({
    name: AugmentationNames.OrionShoulder,
    repCost: 6.25e3,
    moneyCost: 5.5e8,
    info:
      "A bionic shoulder augmentation for the right shoulder. Using cybernetics, " +
      "the ORION-MKIV shoulder enhances the strength and dexterity " +
      "of the user's right arm. It also provides protection due to its " +
      "crystallized graphene plating.",
    defense: 1.05,
    strength: 1.05,
    dexterity: 1.05,
    bladeburner_success_chance: 1.04,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.HyperionV1,
    repCost: 1.25e4,
    moneyCost: 2.75e9,
    info:
      "A pair of mini plasma cannons embedded into the hands. The Hyperion is capable " +
      "of rapidly firing bolts of high-density plasma. The weapon is meant to " +
      "be used against augmented enemies as the ionized " +
      "nature of the plasma disrupts the electrical systems of Augmentations. However, " +
      "it can also be effective against non-augmented enemies due to its high temperature " +
      "and concussive force.",
    bladeburner_success_chance: 1.06,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.HyperionV2,
    repCost: 2.5e4,
    moneyCost: 5.5e9,
    info:
      "A pair of mini plasma cannons embedded into the hands. This augmentation " +
      "is more advanced and powerful than the original V1 model. This V2 model is " +
      "more power-efficient, more accurate, and can fire plasma bolts at a much " +
      "higher velocity than the V1 model.",
    prereqs: [AugmentationNames.HyperionV1],
    bladeburner_success_chance: 1.08,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.GolemSerum,
    repCost: 3.125e4,
    moneyCost: 1.1e10,
    info:
      "A serum that permanently enhances many aspects of human capabilities, " +
      "including strength, speed, immune system enhancements, and mitochondrial efficiency. The " +
      "serum was originally developed by the Chinese military in an attempt to " +
      "create super soldiers.",
    strength: 1.07,
    defense: 1.07,
    dexterity: 1.07,
    agility: 1.07,
    bladeburner_stamina_gain: 1.05,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.VangelisVirus,
    repCost: 1.875e4,
    moneyCost: 2.75e9,
    info:
      "A synthetic symbiotic virus that is injected into human brain tissue. The Vangelis virus " +
      "heightens the senses and focus of its host, and also enhances its intuition.",
    dexterity_exp: 1.1,
    bladeburner_analysis: 1.1,
    bladeburner_success_chance: 1.04,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.VangelisVirus3,
    repCost: 3.75e4,
    moneyCost: 1.1e10,
    info:
      "An improved version of Vangelis, a synthetic symbiotic virus that is " +
      "injected into human brain tissue. On top of the benefits of the original " +
      "virus, this also grants accelerated healing and enhanced " +
      "reflexes.",
    prereqs: [AugmentationNames.VangelisVirus],
    defense_exp: 1.1,
    dexterity_exp: 1.1,
    bladeburner_analysis: 1.15,
    bladeburner_success_chance: 1.05,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.INTERLINKED,
    repCost: 2.5e4,
    moneyCost: 5.5e9,
    info:
      "The DNA is genetically modified to enhance the human's body " +
      "extracellular matrix (ECM). This improves the ECM's ability to " +
      "structurally support the body and grants heightened strength and " +
      "durability.",
    strength_exp: 1.05,
    defense_exp: 1.05,
    dexterity_exp: 1.05,
    agility_exp: 1.05,
    bladeburner_max_stamina: 1.1,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeRunner,
    repCost: 2e4,
    moneyCost: 8.25e9,
    info:
      `A cybernetic foot augmentation that was specifically created for ${FactionNames.Bladeburners} ` +
      "during the Synthoid Uprising. The organic musculature of the human foot " +
      "is enhanced with flexible carbon nanotube matrices that are controlled by " +
      "intelligent servo-motors.",
    agility: 1.05,
    bladeburner_max_stamina: 1.05,
    bladeburner_stamina_gain: 1.05,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmor,
    repCost: 1.25e4,
    moneyCost: 1.375e9,
    info:
      `A powered exoskeleton suit designed as armor for ${FactionNames.Bladeburners} units. This ` +
      "exoskeleton is incredibly adaptable and can protect the wearer from blunt, piercing, " +
      "concussive, thermal, chemical, and electric trauma. It also enhances the user's " +
      "physical abilities.",
    strength: 1.04,
    defense: 1.04,
    dexterity: 1.04,
    agility: 1.04,
    bladeburner_stamina_gain: 1.02,
    bladeburner_success_chance: 1.03,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmorPowerCells,
    repCost: 1.875e4,
    moneyCost: 2.75e9,
    info:
      "Upgrades the BLADE-51b Tesla Armor with Ion Power Cells, which are capable of " +
      "more efficiently storing and using power.",
    prereqs: [AugmentationNames.BladeArmor],
    bladeburner_success_chance: 1.05,
    bladeburner_stamina_gain: 1.02,
    bladeburner_max_stamina: 1.05,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmorEnergyShielding,
    repCost: 2.125e4,
    moneyCost: 5.5e9,
    info:
      "Upgrades the BLADE-51b Tesla Armor with a plasma energy propulsion system " +
      "that is capable of projecting an energy shielding force field.",
    prereqs: [AugmentationNames.BladeArmor],
    defense: 1.05,
    bladeburner_success_chance: 1.06,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmorUnibeam,
    repCost: 3.125e4,
    moneyCost: 1.65e10,
    info:
      "Upgrades the BLADE-51b Tesla Armor with a concentrated deuterium-fluoride laser " +
      "weapon. It's precision and accuracy makes it useful for quickly neutralizing " +
      "threats while keeping casualties to a minimum.",
    prereqs: [AugmentationNames.BladeArmor],
    bladeburner_success_chance: 1.08,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmorOmnibeam,
    repCost: 6.25e4,
    moneyCost: 2.75e10,
    info:
      "Upgrades the BLADE-51b Tesla Armor Unibeam augmentation to use a " +
      "multiple-fiber system. This upgraded weapon uses multiple fiber laser " +
      "modules that combine together to form a single, more powerful beam of up to " +
      "2000MW.",
    prereqs: [AugmentationNames.BladeArmorUnibeam],
    bladeburner_success_chance: 1.1,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladeArmorIPU,
    repCost: 1.5e4,
    moneyCost: 1.1e9,
    info:
      "Upgrades the BLADE-51b Tesla Armor with an AI Information Processing " +
      "Unit that was specially designed to analyze Synthoid related data and " +
      "information.",
    prereqs: [AugmentationNames.BladeArmor],
    bladeburner_analysis: 1.15,
    bladeburner_success_chance: 1.02,
    isSpecial: true,
    factions: [FactionNames.Bladeburners],
  }),
  new Augmentation({
    name: AugmentationNames.BladesSimulacrum,
    repCost: 1.25e3,
    moneyCost: 1.5e11,
    info:
      "A highly-advanced matter phase-shifter module that is embedded " +
      "in the brainstem and cerebellum. This augmentation allows " +
      "the user to project and control a holographic simulacrum within an " +
      "extremely large radius. These specially-modified holograms were specifically " +
      "weaponized by Bladeburner units to be used against Synthoids.",
    stats: (
      <>
      This augmentation allows you to perform Bladeburner actions and other actions(such as working, committing
        crimes, etc.) at the same time.
      < />
    ),
isSpecial: true,
  factions: [FactionNames.Bladeburners],
  }),
];

export const initChurchOfTheMachineGodAugmentations = (): Augmentation[] => [
  new Augmentation({
    name: AugmentationNames.StaneksGift1,
    repCost: 0,
    moneyCost: 0,
    info:
      'Allison "Mother" Stanek imparts you with her gift. An ' +
      "experimental Augmentation implanted at the base of the neck. " +
      "It allows you to overclock your entire system by carefully " +
      "changing the configuration.",
    isSpecial: true,
    hacking_chance: 0.9,
    hacking_speed: 0.9,
    hacking_money: 0.9,
    hacking_grow: 0.9,
    hacking: 0.9,
    strength: 0.9,
    defense: 0.9,
    dexterity: 0.9,
    agility: 0.9,
    charisma: 0.9,
    hacking_exp: 0.9,
    strength_exp: 0.9,
    defense_exp: 0.9,
    dexterity_exp: 0.9,
    agility_exp: 0.9,
    charisma_exp: 0.9,
    company_rep: 0.9,
    faction_rep: 0.9,
    crime_money: 0.9,
    crime_success: 0.9,
    hacknet_node_money: 0.9,
    hacknet_node_purchase_cost: 1.1,
    hacknet_node_ram_cost: 1.1,
    hacknet_node_core_cost: 1.1,
    hacknet_node_level_cost: 1.1,
    work_money: 0.9,
    stats: <>Its unstable nature decreases all your stats by 10% </>,
    factions: [FactionNames.ChurchOfTheMachineGod],
  }),
  new Augmentation({
    name: AugmentationNames.StaneksGift2,
    repCost: 1e6,
    moneyCost: 0,
    info:
      "The next evolution is near, a coming together of man and machine. A synthesis greater than the birth of the human " +
      "organism. Time spent with the gift has allowed for acclimatization of the invasive augment and the toll it takes upon " +
      "your frame granting a 5% reduced penalty to all stats.",
    prereqs: [AugmentationNames.StaneksGift1],
    isSpecial: true,
    hacking_chance: 0.95 / 0.9,
    hacking_speed: 0.95 / 0.9,
    hacking_money: 0.95 / 0.9,
    hacking_grow: 0.95 / 0.9,
    hacking: 0.95 / 0.9,
    strength: 0.95 / 0.9,
    defense: 0.95 / 0.9,
    dexterity: 0.95 / 0.9,
    agility: 0.95 / 0.9,
    charisma: 0.95 / 0.9,
    hacking_exp: 0.95 / 0.9,
    strength_exp: 0.95 / 0.9,
    defense_exp: 0.95 / 0.9,
    dexterity_exp: 0.95 / 0.9,
    agility_exp: 0.95 / 0.9,
    charisma_exp: 0.95 / 0.9,
    company_rep: 0.95 / 0.9,
    faction_rep: 0.95 / 0.9,
    crime_money: 0.95 / 0.9,
    crime_success: 0.95 / 0.9,
    hacknet_node_money: 0.95 / 0.9,
    hacknet_node_purchase_cost: 1.05 / 1.1,
    hacknet_node_ram_cost: 1.05 / 1.1,
    hacknet_node_core_cost: 1.05 / 1.1,
    hacknet_node_level_cost: 1.05 / 1.1,
    work_money: 0.95 / 0.9,
    stats: <>The penalty for the gift is reduced to 5% </>,
    factions: [FactionNames.ChurchOfTheMachineGod],
  }),
  new Augmentation({
    name: AugmentationNames.StaneksGift3,
    repCost: 1e8,
    moneyCost: 0,
    info:
      "The synthesis of human and machine is nothing to fear. It is our destiny. " +
      "You will become greater than the sum of our parts. As One. Embrace your gift " +
      "fully and wholly free of it's accursed toll. Serenity brings tranquility in the form " +
      "of no longer suffering a stat penalty. ",
    prereqs: [AugmentationNames.StaneksGift2, AugmentationNames.StaneksGift1],
    isSpecial: true,
    hacking_chance: 1 / 0.95,
    hacking_speed: 1 / 0.95,
    hacking_money: 1 / 0.95,
    hacking_grow: 1 / 0.95,
    hacking: 1 / 0.95,
    strength: 1 / 0.95,
    defense: 1 / 0.95,
    dexterity: 1 / 0.95,
    agility: 1 / 0.95,
    charisma: 1 / 0.95,
    hacking_exp: 1 / 0.95,
    strength_exp: 1 / 0.95,
    defense_exp: 1 / 0.95,
    dexterity_exp: 1 / 0.95,
    agility_exp: 1 / 0.95,
    charisma_exp: 1 / 0.95,
    company_rep: 1 / 0.95,
    faction_rep: 1 / 0.95,
    crime_money: 1 / 0.95,
    crime_success: 1 / 0.95,
    hacknet_node_money: 1 / 0.95,
    hacknet_node_purchase_cost: 1 / 1.05,
    hacknet_node_ram_cost: 1 / 1.05,
    hacknet_node_core_cost: 1 / 1.05,
    hacknet_node_level_cost: 1 / 1.05,
    work_money: 1 / 0.95,
    stats: <>Stanek's Gift has no penalty.</>,
    factions: [FactionNames.ChurchOfTheMachineGod],
  }),
  new Augmentation({
    name: AugmentationNames.BigDsBigBrain,
    isSpecial: true,
    factions: [],
    repCost: Infinity,
    moneyCost: Infinity,
    info:
      "A chip containing the psyche of the greatest BitRunner to ever exists. " +
      "Installing this relic significantly increases ALL of your stats. " +
      "However it may have unintended consequence on the users mental well-being.",
    stats: <>Grants access to unimaginable power.< />,
    hacking: 2,
    strength: 2,
    defense: 2,
    dexterity: 2,
    agility: 2,
    charisma: 2,
    hacking_exp: 2,
    strength_exp: 2,
    defense_exp: 2,
    dexterity_exp: 2,
    agility_exp: 2,
    charisma_exp: 2,
    hacking_chance: 2,
    hacking_speed: 2,
    hacking_money: 2,
    hacking_grow: 2,
    company_rep: 2,
    faction_rep: 2,
    crime_money: 2,
    crime_success: 2,
    work_money: 2,
    hacknet_node_money: 2,
    hacknet_node_purchase_cost: 0.5,
    hacknet_node_ram_cost: 0.5,
    hacknet_node_core_cost: 0.5,
    hacknet_node_level_cost: 0.5,
    bladeburner_max_stamina: 2,
    bladeburner_stamina_gain: 2,
    bladeburner_analysis: 2,
    bladeburner_success_chance: 2,

    startingMoney: 1e12,
    programs: [
      Programs.BruteSSHProgram.name,
      Programs.FTPCrackProgram.name,
      Programs.RelaySMTPProgram.name,
      Programs.HTTPWormProgram.name,
      Programs.SQLInjectProgram.name,
      Programs.DeepscanV1.name,
      Programs.DeepscanV2.name,
      Programs.ServerProfiler.name,
      Programs.AutoLink.name,
      Programs.Formulas.name,
    ],
  }),
];

export function initNeuroFluxGovernor(): Augmentation {
  const donationBonus = CONSTANTS.Donations / 1e6 / 100; // 1 millionth of a percent per donation
  return new Augmentation({
    name: AugmentationNames.NeuroFluxGovernor,
    repCost: 500,
    moneyCost: 750e3,
    info:
      "Undetectable adamantium nanobots injected in the users bloodstream. The NeuroFlux Governor " +
      "monitors and regulates all aspects of the human body, essentially 'governing' the body. " +
      "By doing so, it improves the users performance for most actions.",
    stats: (
      <>
      This special augmentation can be leveled up infinitely.Each level of this augmentation increases MOST
        multipliers by 1% (+{(donationBonus * 100).toFixed(6)} %), stacking multiplicatively.
      < />
    ),
  isSpecial: true,
    hacking_chance: 1.01 + donationBonus,
      hacking_speed: 1.01 + donationBonus,
        hacking_money: 1.01 + donationBonus,
          hacking_grow: 1.01 + donationBonus,
            hacking: 1.01 + donationBonus,
              strength: 1.01 + donationBonus,
                defense: 1.01 + donationBonus,
                  dexterity: 1.01 + donationBonus,
                    agility: 1.01 + donationBonus,
                      charisma: 1.01 + donationBonus,
                        hacking_exp: 1.01 + donationBonus,
                          strength_exp: 1.01 + donationBonus,
                            defense_exp: 1.01 + donationBonus,
                              dexterity_exp: 1.01 + donationBonus,
                                agility_exp: 1.01 + donationBonus,
                                  charisma_exp: 1.01 + donationBonus,
                                    company_rep: 1.01 + donationBonus,
                                      faction_rep: 1.01 + donationBonus,
                                        crime_money: 1.01 + donationBonus,
                                          crime_success: 1.01 + donationBonus,
                                            hacknet_node_money: 1.01 + donationBonus,
                                              hacknet_node_purchase_cost: 1 / (1.01 + donationBonus),
                                                hacknet_node_ram_cost: 1 / (1.01 + donationBonus),
                                                  hacknet_node_core_cost: 1 / (1.01 + donationBonus),
                                                    hacknet_node_level_cost: 1 / (1.01 + donationBonus),
                                                      work_money: 1.01 + donationBonus,
                                                        factions: Object.values(FactionNames).filter(
                                                          (factionName) =>
                                                            ![FactionNames.ShadowsOfAnarchy, FactionNames.Bladeburners, FactionNames.ChurchOfTheMachineGod].includes(
                                                              factionName,
                                                            ),
                                                        ),
  });
}

export function initUnstableCircadianModulator(): Augmentation {
  //Time-Based Augment Test
  const randomBonuses = getRandomBonus();

  const UnstableCircadianModulatorParams: IConstructorParams = {
    name: AugmentationNames.UnstableCircadianModulator,
    moneyCost: 5e9,
    repCost: 3.625e5,
    info:
      "An experimental nanobot injection. Its unstable nature leads to " +
      "unpredictable results based on your circadian rhythm.",
    factions: [FactionNames.SpeakersForTheDead],
  };
  Object.keys(randomBonuses.bonuses).forEach(
    (key) => ((UnstableCircadianModulatorParams as any)[key] = randomBonuses.bonuses[key]),
  );

  return new Augmentation(UnstableCircadianModulatorParams);
}
