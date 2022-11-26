const allFactions = {
  'list': [
    {
      'faction': 'CyberSec',
      'type': 'Early Game Faction',
      'requirements': 'Install a backdoor on the CSEC server',
      'augmentations': 'NeuroFlux Governor, Neurotrainer I, Synaptic Enhancement Implant, BitWire, Cranial Signal Processors - Gen I, Cranial Signal Processors - Gen II',
      'prevents': 'N/A',
      'work': 'Hacking Contracts',
      'description': 'The Internet is the first thing that was built that we don\'t fully understand, the largest experiment in anarchy that we have ever had. And as the world becomes increasingly dominated by it, society approaches the brink of total chaos. We serve only to protect society, to protect humanity, to protect the world from imminent collapse.',
      'checklistID': 'faction-1',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Netburners',
      'type': 'Early Game Faction',
      'requirements': 'Hacking Level 80, Total Hacknet Levels of 100, Total Hacknet RAM of 8, Total Hacknet Cores of 4',
      'augmentations': 'NeuroFlux Governor, Hacknet Node NIC Architecture Neural-Upload, Hacknet Node Cache Architecture Neural-Upload, Hacknet Node CPU Architecture Neural-Upload, Hacknet Node Kernel Direct-Neural Interface, Hacknet Node Core Direct-Neural Interface',
      'prevents': 'N/A',
      'work': 'Hacking Contracts',
      'description': '~~//*>H4CK||3T 8URN3R5**>?>\~~',
      'checklistID': 'faction-2',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Tian Di Hui',
      'type': 'Early Game Faction',
      'requirements': '$1m, Hacking Level 50, Be in Chongqing, New Tokyo, or Ishim',
      'augmentations': 'NeuroFlux Governor, Wired Reflexes, Speech Enhancement, ADR-V1 Pheromone Gene, Nuoptimal Nootropic Injector Implant, Social Negotiation Assistant (S.N.A), Speech Processor Implant, Nanofiber Weave, Neuroreceptor Management Implant',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Security Work',
      'description': 'Obey Heaven and work righteously.',
      'checklistID': 'faction-3',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Shadows of Anarchy',
      'type': 'Early Game Faction',
      'requirements': 'Successfully infiltrate a company',
      'augmentations': 'SoA - phyzical WKS harmonizer, SoA - Might of Ares, SoA - Wisdom of Athena, SoA - Chaos of Dionysus, SoA - Beauty of Aphrodite, SoA - Trickery of Hermes, SoA - Flood of Poseidon, SoA - Hunt of Artemis, SoA - Knowledge of Apollo',
      'prevents': 'N/A',
      'work': 'Shadows of Anarchy can only gain reputation by infiltrating.',
      'description': 'The government is ruled by the corporations that we have allowed to consume it. To release the world from its shackles, the gods grant us their strength.',
      'checklistID': 'faction-4',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'NiteSec',
      'type': 'Hacking Groups',
      'requirements': 'Install a backdoor on the avmnite-02h server',
      'augmentations': 'NeuroFlux Governor, DataJack, BitWire, Neurotrainer II, Cranial Signal Processors - Gen I, Artificial Synaptic Potentiation, Cranial Signal Processors - Gen II, CRTX42-AA Gene Modification, Neural-Retention Enhancement, Embedded Netburner Module, Cranial Signal Processors - Gen III',
      'prevents': 'N/A',
      'work': 'Hacking Contracts',
      'description': 'ASCII Art',
      'checklistID': 'faction-5',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'The Black Hand',
      'type': 'Hacking Groups',
      'requirements': 'Install a backdoor on the I.I.I.I server',
      'augmentations': 'NeuroFlux Governor, DataJack, The Black Hands, Cranial Signal Processors - Gen IV, Enhanced Myelin Sheathing, Embedded Netburner Module_Core Implant, Neuralstimulator, Artificial Synaptic Potentiation, Embedded Netburner Module, Cranial Signal Processors - Gen III',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work',
      'description': 'The world, so afraid of strong government, now has no government. Only power - Digital power. Financial power. Technological power. And those at the top rule with an invisible hand. They built a society where the rich get richer, and everyone else suffers. <br>So much pain. So many lives. Their darkness must end.',
      'checklistID': 'faction-6',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Bitrunners',
      'type': 'Hacking Groups',
      'requirements': 'Install a backdoor on the run4theh111z server',
      'augmentations': 'NeuroFlux Governor, DataJack, Cranial Signal Processors - Gen IV, Enhanced Myelin Sheathing, Neural Accelerator, Cranial Signal Processors - Gen V, Embedded Netburner Module_Core Implant, Artificial Bio-neural Network Implant, BitRunners Neurolink, Embedded Netburner Module_Core V2 Upgrade, Neurotrainer II, Embedded Netburner Module, Cranial Signal Processors - Gen III',
      'prevents': 'N/A',
      'work': 'Hacking Contracts',
      'description': 'Our entire lives are controlled by bits. All of our actions, our thoughts, our personal information. It\'s all transformed into bits, stored in bits, communicated through bits. It’s impossible for any person to move, to live, to operate at any level without the use of bits. And when a person moves, lives, and operates, they leave behind their bits, mere traces of seemingly meaningless fragments of information. But these bits can be reconstructed. Transformed. Used. <br>Those who run the bits, run the world.',
      'checklistID': 'faction-7',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Sector-12',
      'type': 'City Factions',
      'requirements': 'Be in Sector-12, $15m',
      'augmentations': 'NeuroFlux Governor, Neuralstimulator, Wired Reflexes, Augmented Targeting I, Augmented Targeting II, Speech Processor Implant, CashRoot Starter Kit',
      'prevents': 'Chongqing, New Tokyo, Ishima, Volhaven',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'The City of the Future.',
      'checklistID': 'faction-8',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Chongqing',
      'type': 'City Factions',
      'requirements': 'Be in Chongqing, $20m',
      'augmentations': 'NeuroFlux Governor, Neuregen Gene Modification, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator, DataJack',
      'prevents': 'Sector-12, Aevum, Volhaven',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'Serve the People.',
      'checklistID': 'faction-9',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Aevum',
      'type': 'City Factions',
      'requirements': 'Be in Aevum, $40m',
      'augmentations': 'NeuroFlux Governor, PCMatrix, Neuralstimulator, Wired Reflexes, Neurotrainer I, Synaptic Enhancement Implant, Speech Processor Implant',
      'prevents': 'Chongqing, New Tokyo, Ishima, Volhaven',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'The Silicon City.',
      'checklistID': 'faction-10',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Volhaven',
      'type': 'City Factions',
      'requirements': 'Be in Volhaven, $50m',
      'augmentations': 'NeuroFlux Governor, Combat Rib I, Combat Rib II, DermaForce Particle Barrier, Wired Reflexes, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator',
      'prevents': 'Sector-12, Aevum, Chongqing, New Tokyo, Ishima',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'Benefit, Honor, and Glory.',
      'checklistID': 'faction-11',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'New Tokyo',
      'type': 'City Factions',
      'requirements': 'Be in New Tokyo, $20m',
      'augmentations': 'NeuroFlux Governor, NutriGen Implant, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator, DataJack',
      'prevents': 'Sector-12, Aevum, Volhaven',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'Asia\'s World City.',
      'checklistID': 'faction-12',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Ishima',
      'type': 'City Factions',
      'requirements': 'Be in Ishima, $30m',
      'augmentations': 'NeuroFlux Governor, INFRARET Enhancement, Wired Reflexes, Augmented Targeting I, Combat Rib I, Speech Processor Implant, Neuralstimulator',
      'prevents': 'Sector-12, Aevum, Volhaven',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'The East Asian Order of the Future.',
      'checklistID': 'faction-13',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'ECorp',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-14',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'MegaCorp',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-15',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'KuaiGong International',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-16',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Four Sigma',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-17',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'NWO',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-18',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Blade Industries',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-19',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'OmniTek Incorporated',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-20',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Bachman & Associates',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-21',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Clarke Incorporated',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-22',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Fulcrum Secret Technologies',
      'type': 'Megacorporations',
      'requirements': 'Have 400k reputation with the Corporation, Install a backdoor on the fulcrumassets server',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-23',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Slum Snakes',
      'type': 'Criminal Organizations',
      'requirements': 'All Combat Stats of 30, -9 Karma, $1m',
      'augmentations': 'NeuroFlux Governor, LuminCloaking-V2 Skin Implant, SmartSonar Implant, Wired Reflexes, LuminCloaking-V1 Skin Implant, Augmented Targeting I, Combat Rib I',
      'prevents': 'N/A',
      'work': 'Field Work, Security Work',
      'description': 'Slum Snakes rule!',
      'checklistID': 'faction-24',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Tetrads',
      'type': 'Criminal Organizations',
      'requirements': 'Be in Chongqing, New Tokyo, or Ishima, All Combat Stats of 75, -18 Karma',
      'augmentations': 'NeuroFlux Governor, LuminCloaking-V2 Skin Implant, HemoRecirculator, Power Recirculation Core, Bionic Arms, LuminCloaking-V1 Skin Implant',
      'prevents': 'N/A',
      'work': 'Field Work, Security Work',
      'description': 'Following the mandate of Heaven and carrying out the way.',
      'checklistID': 'faction-25',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Silhouette',
      'type': 'Criminal Organizations',
      'requirements': 'CTO, CFO, or CEO of a company, $15m, -22 Karma',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-26',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Speakers for the Dead',
      'type': 'Criminal Organizations',
      'requirements': 'Hacking Level 100, All Combat Stats of 300, 30 People Killed, -45 Karma, Not working for CIA or NSA',
      'augmentations': 'NeuroFlux Governor, Graphene_BrachiBlades_Upgrade, Unstable Circadian Modulator, Synfibril Muscle, Synthetic Heart, Wired Reflexes, Speech Enhancement, Nanofiber Weave, The Shadow\'s Simulacrum, Bionic Spine, Bionic Legs',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'It is better to reign in Hell than to serve in Heaven.',
      'checklistID': 'faction-27',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'The Dark Army',
      'type': 'Criminal Organizations',
      'requirements': 'Hacking Level 300, All Combat Stats of 300, Be in Chongqing, 5 People Killed, -45 Karma, Not working for CIA or NSA',
      'augmentations': 'NeuroFlux Governor, Graphene_Bionic_Arms_Upgrade, Wired Reflexes, Augmented Targeting I, Combat Rib I, Augmented Targeting II, HemoRecirculator, Combat Rib II, Power Recirculation Core, Augmented Targeting III, Combat Rib III, Nanofiber Weave, The Shadow\'s Simulacrum',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work',
      'description': 'The World doesn\'t care about right or wrong. It only cares about power.',
      'checklistID': 'faction-28',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'The Syndicate',
      'type': 'Criminal Organizations',
      'requirements': 'Hacking Level 200, All Combat Stats of 200, Be in Aevum or Sector-12, $10m, -90 Karma, Not working for CIA or NSA',
      'augmentations': 'NeuroFlux Governor, HemoRecirculator, BrachiBlades, Power Recirculation Core, Augmented Targeting III, Combat Rib III, The Shadow\'s Simulacrum, Bionic Spine, Bionic Legs, NEMEAN Subdermal Weave, Wired Reflexes, ADR-V1 Pheromone Gene, Augmented Targeting I, Combat Rib I, Augmented Targeting II, Combat Rib II, Nanofiber Weave',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work, Security Work',
      'description': 'Honor holds you back.',
      'checklistID': 'faction-29',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Daedalus',
      'type': 'Endgame Factions',
      'requirements': '30 Augmentations, $100b, Hacking Level of 2500 OR All Combat Stats of 1500',
      'augmentations': 'NeuroFlux Governor, Synfibril Muscle, Embedded Netburner Module_Analyze Engine, Synthetic Heart, NEMEAN Subdermal Weave, Embedded Netburner Module_Direct Memory Access Upgrade, Embedded Netburner Module_Core V3 Upgrade, The Red Pill',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work',
      'description': 'Yesterday we obeyed kings and bent our necks to emperors. Today we kneel only to truth.',
      'checklistID': 'faction-30',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'The Covenant',
      'type': 'Endgame Factions',
      'requirements': '20 Augmentations, $75b, Hacking Level of 850, All Combat Stats of 850',
      'augmentations': 'NeuroFlux Governor, Graphene Bone Lacings, SPTN-97 Gene Modification, Embedded Netburner Module_Core V3 Upgrade, Augmented Targeting III, Combat Rib III, Synfibril Muscle, Embedded Netburner Module_Analyze Engine, Synthetic Heart, NEMEAN Subdermal Weave, Embedded Netburner Module_Direct Memory Access Upgrade',
      'prevents': 'N/A',
      'work': 'Hacking Contracts, Field Work',
      'description': 'Surrender yourself. Give up your empty individuality to become part of something great, something eternal. Become a slave. Submit your mind, body, and soul. Only then can you set yourself free. <br>Only then can you discover immortality.',
      'checklistID': 'faction-31',
      'cardID': '',
      'anchor-link': '',
    },
    {
      'faction': 'Illuminati',
      'type': 'Endgame Factions',
      'requirements': '30 Augmentations, $150b, Hacking Level of 1500, All Combat Stats of 1200',
      'augmentations': '',
      'prevents': 'N/A',
      'work': '',
      'description': '',
      'checklistID': 'faction-32',
      'cardID': '',
      'anchor-link': '',
    },
  ]
};
const factionListTemplate = ({
  faction,
  type,
  requirements,
  augmentations,
  prevents,
  work,
  description,
}) => `
<div class="card rounded-0 mt-3">
  <div class="card-body">
  <p class="card-text float-end"><small class="text-muted">${type}</small></p>
    <h6 class="card-title fw-bold">${faction}</h6>
    <p class="card-text"><small class="text-secondary">${description}</small></p>
    <p class="card-text"><strong>Requirements: </strong>${requirements}</p>
    <p class="card-text"><strong>Rivals: </strong>${prevents}</p>
    <p class="card-text"><strong>Work Available: </strong>${work}</p>
    <p class="card-text"><strong>Augmentations Available: </strong><br><span class="card-text augmentations-links">${augmentations.replaceAll(', ', '<br>')}</span></p>
   
  </div>
</div>
`;

const factionTable = allFactions.list.map(factionListTemplate);

document.querySelector('#all-factions-data').innerHTML = factionTable.join("")

  .replace(/\bADR-V1 Pheromone Gene\b/gi, `<a href="#ADR-V1 Pheromone Gene">ADR-V1 Pheromone Gene</a>`)
  .replace(/\bArtificial Bio-neural Network Implant\b/gi, `<a href="#Artificial Bio-neural Network Implant">Artificial Bio-neural Network Implant </a>`)
  .replace(/\bArtificial Synaptic Potentiation\b/gi, `<a href="#Artificial Synaptic Potentiation">Artificial Synaptic Potentiation</a>`)
  .replace(/\bAugmented Targeting I\b/gi, `<a href="#Augmented Targeting I">Augmented Targeting I</a>`)
  .replace(/\bAugmented Targeting II\b/gi, `<a href="#Augmented Targeting II">Augmented Targeting II</a>`)
  .replace(/\bAugmented Targeting III\b/gi, `<a href="#Augmented Targeting III">Augmented Targeting III</a>`)
  .replace(/\bBionic Arms\b/gi, `<a href="#Bionic Arms">Bionic Arms</a>`)
  .replace(/\bBionic Legs\b/gi, `<a href="#Bionic Legs">Bionic Legs</a>`)
  .replace(/\bBionic Spine\b/gi, `<a href="#Bionic Spine">Bionic Spine</a>`)
  .replace(/\bBitRunners Neurolink\b/gi, `<a href="#BitRunners Neurolink">BitRunners Neurolink </a>`)
  .replace(/\bBitWire\b/gi, `<a href="#BitWire">BitWire</a>`)
  .replace(/\bBrachiBlades\b/gi, `<a href="#BrachiBlades">BrachiBlades</a>`)
  .replace(/\bCashRoot Starter Kit\b/gi, `<a href="#CashRoot Starter Kit">CashRoot Starter Kit</a>`)
  .replace(/\bCombat Rib I\b/gi, `<a href="#Combat Rib I">Combat Rib I</a>`)
  .replace(/\bCombat Rib II\b/gi, `<a href="#Combat Rib II">Combat Rib II</a>`)
  .replace(/\bCombat Rib III\b/gi, `<a href="#Combat Rib III">Combat Rib III</a>`)
  .replace(/\bCranial Signal Processors - Gen I\b/gi, `<a href="#Cranial Signal Processors - Gen I">Cranial Signal Processors - Gen I</a>`)
  .replace(/\bCranial Signal Processors - Gen II\b/gi, `<a href="#Cranial Signal Processors - Gen II">Cranial Signal Processors - Gen II</a>`)
  .replace(/\bCranial Signal Processors - Gen III\b/gi, `<a href="#Cranial Signal Processors - Gen III">Cranial Signal Processors - Gen III</a>`)
  .replace(/\bCranial Signal Processors - Gen IV\b/gi, `<a href="#Cranial Signal Processors - Gen IV">Cranial Signal Processors - Gen IV</a>`)
  .replace(/\bCranial Signal Processors - Gen V\b/gi, `<a href="#Cranial Signal Processors - Gen V">Cranial Signal Processors - Gen V </a>`)
  .replace(/\bCRTX42-AA Gene Modification\b/gi, `<a href="#CRTX42-AA Gene Modification">CRTX42-AA Gene Modification</a>`)
  .replace(/\bDataJack\b/gi, `<a href="#DataJack">DataJack</a>`)
  .replace(/\bDermaForce Particle Barrier\b/gi, `<a href="#DermaForce Particle Barrier">DermaForce Particle Barrier</a>`)
  .replace(/\bEmbedded Netburner Module\b/gi, `<a href="#Embedded Netburner Module">Embedded Netburner Module</a>`)
  .replace(/\bEmbedded Netburner Module_Analyze Engine\b/gi, `<a href="#Embedded Netburner Module Analyze Engine">Embedded Netburner Module Analyze Engine</a>`)
  .replace(/\bEmbedded Netburner Module_Core Implant\b/gi, `<a href="#Embedded Netburner Module Core Implant">Embedded Netburner Module Core Implant</a>`)
  .replace(/\bEmbedded Netburner Module_Core V2 Upgrade\b/gi, `<a href="#Embedded Netburner Module Core V2 Upgrade">Embedded Netburner Module Core V2 Upgrade</a>`)
  .replace(/\bEmbedded Netburner Module_Core V3 Upgrade\b/gi, `<a href="#Embedded Netburner Module Core V3 Upgrade">Embedded Netburner Module Core V3 Upgrade</a>`)
  .replace(/\bEmbedded Netburner Module_Direct Memory Access Upgrade\b/gi, `<a href="#Embedded Netburner Module Direct Memory Access Upgrade">Embedded Netburner Module Direct Memory Access Upgrade</a>`)
  .replace(/\bEnhanced Myelin Sheathing\b/gi, `<a href="#Enhanced Myelin Sheathing">Enhanced Myelin Sheathing</a>`)
  .replace(/\bGraphene_Bionic_Arms_Upgrade\b/gi, `<a href="#Graphene Bionic Arms Upgrade">Graphene Bionic Arms Upgrade</a>`)
  .replace(/\bGraphene Bone Lacings\b/gi, `<a href="#Graphene Bone Lacings">Graphene Bone Lacings</a>`)
  .replace(/\bGraphene_BrachiBlades_Upgrade\b/gi, `<a href="#Graphene BrachiBlades Upgrade">Graphene BrachiBlades Upgrade</a>`)
  .replace(/\bHacknet Node Cache Architecture Neural-Upload\b/gi, `<a href="#Hacknet Node Cache Architecture Neural-Upload">Hacknet Node Cache Architecture Neural-Upload</a>`)
  .replace(/\bHacknet Node Core Direct-Neural Interface\b/gi, `<a href="#Hacknet Node Core Direct-Neural Interface">Hacknet Node Core Direct-Neural Interface</a>`)
  .replace(/\bHacknet Node CPU Architecture Neural-Upload\b/gi, `<a href="#Hacknet Node CPU Architecture Neural-Upload">Hacknet Node CPU Architecture Neural-Upload</a>`)
  .replace(/\bHacknet Node Kernel Direct-Neural Interface\b/gi, `<a href="#Hacknet Node Kernel Direct-Neural Interface">Hacknet Node Kernel Direct-Neural Interface</a>`)
  .replace(/\bHacknet Node NIC Architecture Neural-Upload\b/gi, `<a href="#Hacknet Node NIC Architecture Neural-Upload">Hacknet Node NIC Architecture Neural-Upload</a>`)
  .replace(/\bHemoRecirculator\b/gi, `<a href="#HemoRecirculator">HemoRecirculator</a>`)
  .replace(/\bINFRARET Enhancement\b/gi, `<a href="#INFRARET Enhancement">INFRARET Enhancement</a>`)
  .replace(/\bLuminCloaking-V1 Skin Implant\b/gi, `<a href="#LuminCloaking-V1 Skin Implant">LuminCloaking-V1 Skin Implant</a>`)
  .replace(/\bLuminCloaking-V2 Skin Implant\b/gi, `<a href="#LuminCloaking-V2 Skin Implant">LuminCloaking-V2 Skin Implant</a>`)
  .replace(/\bNanofiber Weave\b/gi, `<a href="#Nanofiber Weave">Nanofiber Weave</a>`)
  .replace(/\bNEMEAN Subdermal Weave\b/gi, `<a href="#NEMEAN Subdermal Weave">NEMEAN Subdermal Weave</a>`)
  .replace(/\bNeural Accelerator\b/gi, `<a href="#Neural Accelerator">Neural Accelerator</a>`)
  .replace(/\bNeural-Retention Enhancement\b/gi, `<a href="#Neural-Retention Enhancement">Neural-Retention Enhancement</a>`)
  .replace(/\bNeuralstimulator\b/gi, `<a href="#Neuralstimulator">Neuralstimulator</a>`)
  .replace(/\bNeuregen Gene Modification\b/gi, `<a href="#Neuregen Gene Modification">Neuregen Gene Modification</a>`)
  .replace(/\bNeuroFlux Governor\b/gi, `<a href="#NeuroFlux Governor">NeuroFlux Governor</a>`)
  .replace(/\bNeuroreceptor Management Implant\b/gi, `<a href="#Neuroreceptor Management Implant">Neuroreceptor Management Implant</a>`)
  .replace(/\bNeurotrainer I\b/gi, `<a href="#Neurotrainer I">Neurotrainer I</a>`)
  .replace(/\bNeurotrainer II\b/gi, `<a href="#Neurotrainer II">Neurotrainer II</a>`)
  .replace(/\bNuoptimal Nootropic Injector Implant\b/gi, `<a href="#Nuoptimal Nootropic Injector Implant">Nuoptimal Nootropic Injector Implant</a>`)
  .replace(/\bNutriGen Implant\b/gi, `<a href="#NutriGen Implant">NutriGen Implant</a>`)
  .replace(/\bPCMatrix\b/gi, `<a href="#PCMatrix">PCMatrix</a>`)
  .replace(/\bPower Recirculation Core\b/gi, `<a href="#Power Recirculation Core">Power Recirculation Core</a>`)
  .replace(/\bSmartSonar Implant\b/gi, `<a href="#SmartSonar Implant">SmartSonar Implant</a>`)
  .replace(/\bSoA - Beauty of Aphrodite\b/gi, `<a href="#SoA - Beauty of Aphrodite">SoA - Beauty of Aphrodite</a>`)
  .replace(/\bSoA - Chaos of Dionysus\b/gi, `<a href="#SoA - Chaos of Dionysus">SoA - Chaos of Dionysus</a>`)
  .replace(/\bSoA - Flood of Poseidon\b/gi, `<a href="#SoA - Flood of Poseidon">SoA - Flood of Poseidon</a>`)
  .replace(/\bSoA - Hunt of Artemis\b/gi, `<a href="#SoA - Hunt of Artemis">SoA - Hunt of Artemis</a>`)
  .replace(/\bSoA - Knowledge of Apollo\b/gi, `<a href="#SoA - Knowledge of Apollo">SoA - Knowledge of Apollo</a>`)
  .replace(/\bSoA - Might of Ares\b/gi, `<a href="#SoA - Might of Ares">SoA - Might of Ares</a>`)
  .replace(/\bSoA - phyzical WKS harmonizer\b/gi, `<a href="#SoA - phyzical WKS harmonizer">SoA - phyzical WKS harmonizer</a>`)
  .replace(/\bSoA - Trickery of Hermes\b/gi, `<a href="#SoA - Trickery of Hermes">SoA - Trickery of Hermes</a>`)
  .replace(/\bSoA - Wisdom of Athena\b/gi, `<a href="#SoA - Wisdom of Athena">SoA - Wisdom of Athena</a>`)
  .replace('Social Negotiation Assistant (S.N.A)', `<a href="#Social Negotiation Assistant (S.N.A)">Social Negotiation Assistant (S.N.A)</a>`)
  .replace(/\bSpeech Enhancement\b/gi, `<a href="#Speech Enhancement">Speech Enhancement</a>`)
  .replace(/\bSpeech Processor Implant\b/gi, `<a href="#Speech Processor Implant">Speech Processor Implant</a>`)
  .replace(/\bSPTN-97 Gene Modification\b/gi, `<a href="#SPTN-97 Gene Modification">SPTN-97 Gene Modification</a>`)
  .replace(/\bSynaptic Enhancement Implant\b/gi, `<a href="#Synaptic Enhancement Implant">Synaptic Enhancement Implant</a>`)
  .replace(/\bSynfibril Muscle\b/gi, `<a href="#Synfibril Muscle">Synfibril Muscle</a>`)
  .replace(/\bSynthetic Heart\b/gi, `<a href="#Synthetic Heart">Synthetic Heart</a>`)
  .replace(/\bThe Black Hands\b/gi, `<a href="#The Black Hand">The Black Hand</a>`)
  .replace(/\bThe Red Pill\b/gi, `<a href="#The Red Pill">The Red Pill</a>`)
  .replace(/\bThe Shadow's Simulacrum\b/gi, `<a href="#The Shadow's Simulacrum">The Shadow's Simulacrum</a>`)
  .replace(/\bUnstable Circadian Modulator\b/gi, `<a href="#Unstable Circadian Modulator">Unstable Circadian Modulator</a>`)
  .replace(/\bWired Reflexes\b/gi, `<a href="#Wired Reflexes">Wired Reflexes</a>`)

const factionChecklistTemplate = ({
  faction,
  checklistID,
}) => `

<li class="list-group-item border-0">
<input class="form-check-input me-1 faction-checkbox" type="checkbox" value="" id="${checklistID}">
<label class="form-check-label" for="${checklistID}">${faction}</label>
</li>
`;

const factionChecklist = allFactions.list.map(factionChecklistTemplate);

document.querySelector('#all-factions-checklist').innerHTML = `<ul class="list-group rounded-0">${factionChecklist.join("")}</ul>`