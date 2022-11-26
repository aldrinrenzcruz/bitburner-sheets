const allAugments = {
  'list': [
    {
      'augment': 'Artificial Bio-neural Network Implant ', 'source': '', 'prerequisite': '', 'price': '$3.000b', 'reputation': '275.000k rep', 'effects': '+12% hacking skill, +3% faster hack(), grow(), and weaken(), +15% hack() power', 'description': 'A network consisting of millions of nanoprocessors is embedded into the brain. The network is meant to mimic the way a biological brain solves a problem, with each nanoprocessor acting similar to the way a neuron would in a neural network. However, these nanoprocessors are programmed to perform computations much faster than organic neurons, allowing the user to solve much more complex problems at a much faster rate.',
    },
    {
      'augment': 'Artificial Synaptic Potentiation', 'source': '', 'prerequisite': '', 'price': '$80.000m', 'reputation': '6.250k rep', 'effects': '+5% hacking exp , +2% faster hack(), grow(), and weaken() , +5% hack() success chance', 'description': 'The body is injected with a chemical that artificially induces synaptic potentiation, otherwise known as the strengthening of synapses. This results in enhanced cognitive abilities.',
    },
    {
      'augment': 'Augmented Targeting I', 'source': '', 'prerequisite': '', 'price': '$15.000m', 'reputation': '5.000k rep', 'effects': '+10% dexterity skill', 'description': 'A cranial implant that is embedded within the inner ear structures and optic nerves. It regulates and enhances balance and hand-eye coordination.',
    },
    {
      'augment': 'Augmented Targeting II', 'source': '', 'prerequisite': '', 'price': '$42.500m', 'reputation': '8.750k rep', 'effects': '+20% dexterity skill', 'description': 'This upgraded version of the \'Augmented Targeting\' implant is capable of augmenting reality by digitally displaying weaknesses and vital signs of threats.',
    },
    {
      'augment': 'Augmented Targeting III', 'source': '', 'prerequisite': '', 'price': '$115.000m', 'reputation': '27.500k rep', 'effects': '+30% dexterity skill', 'description': 'The latest version of the \'Augmented Targeting\' implant adds the ability to lock-on and track threats.',
    },
    {
      'augment': 'Bionic Arms', 'source': '', 'prerequisite': '', 'price': '$275.000m', 'reputation': '62.500k rep', 'effects': '+30% strength skill, + 30% dexterity skill', 'description': 'Cybernetic arms created from plasteel and carbon fibers that completely replace the user\'s organic arms.',
    },
    {
      'augment': 'Bionic Legs', 'source': '', 'prerequisite': '', 'price': '$375.000m', 'reputation': '150.000k rep', 'effects': '+60% agility skill', 'description': 'Cybernetic legs, created from plasteel and carbon fibers, enhance running speed.',
    },
    {
      'augment': 'Bionic Spine', 'source': '', 'prerequisite': '', 'price': '$125.000m', 'reputation': '45.000k rep', 'effects': '+15% combat skills', 'description': 'The spine is reconstructed using plasteel and carbon fibers. It is now capable of stimulating and regulating neural signals passing through the spinal cord, improving senses and reaction speed. The \'Bionic Spine\' also interfaces with all other \'Bionic\' implants.',
    },
    {
      'augment': 'BitRunners Neurolink ', 'source': '', 'prerequisite': '', 'price': '$4.375b', 'reputation': '875.000k rep', 'effects': '+15% hacking skill, +20% hacking exp, +5% faster hack(), grow(), and weaken(), +10% hack() success chance, Start with FTPCrack.exe and relaySMTP.exe after installing effects.', 'description': 'A brain implant that provides a high-bandwidth, direct neural link between your mind and the BitRunners\' data servers, which reportedly contain the largest database of hacking tools and information in the world.',
    },
    {
      'augment': 'BitWire', 'source': '', 'prerequisite': '', 'price': '$10.000m', 'reputation': '3.750k rep', 'effects': '+5% hacking skill', 'description': 'A small brain implant embedded in the cerebrum. This regulates and improves the brain\'s computing capabilities.',
    },
    {
      'augment': 'BrachiBlades', 'source': '', 'prerequisite': '', 'price': '$90.000m', 'reputation': '12.500k rep', 'effects': '+15% strength skill, +15% defense skill, +15% crime money, +10% crime success rate', 'description': 'A set of retractable plasteel blades that are implanted in the arm, underneath the skin.',
    },
    {
      'augment': 'CashRoot Starter Kit', 'source': 'Sector-12', 'prerequisite': '', 'price': '$125.000m', 'reputation': '12.500k rep', 'effects': 'Start with $1.000m after installing effects, Start with BruteSSH.exe after installing effects.', 'description': 'A collection of digital assets saved on a small chip. The chip is implanted into your wrist. A small jack in the chip allows you to connect it to a computer and upload the assets.',
    },
    {
      'augment': 'Combat Rib I', 'source': '', 'prerequisite': '', 'price': '$23.750m', 'reputation': '7.500k rep', 'effects': '+10% strength skill, +10% defense skill', 'description': 'The rib cage is augmented to continuously release boosters into the bloodstream which increase the oxygen-carrying capacity of blood.',
    },
    {
      'augment': 'Combat Rib II', 'source': '', 'prerequisite': '', 'price': '$65.000m', 'reputation': '18.750k rep', 'effects': '+14% strength skill, +14% defense skill', 'description': 'An upgraded version of the \'Combat Rib\' augmentation that adds potent stimulants which improve focus and endurance while decreasing reaction time and fatigue.',
    },
    {
      'augment': 'Combat Rib III', 'source': '', 'prerequisite': '', 'price': '$120.000m', 'reputation': '35.000k rep', 'effects': '+18% strength skill, +18% defense skill', 'description': 'The latest version of the \'Combat Rib\' augmentation releases advanced anabolic steroids that improve muscle mass and physical performance while being safe and free of side effects.',
    },
    {
      'augment': 'Cranial Signal Processors - Gen I', 'source': '', 'prerequisite': '', 'price': '$70.000m', 'reputation': '10.000k rep', 'effects': '+5% hacking skill , +1% faster hack(), grow(), and weaken()', 'description': 'The first generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn\'t have to.',
    },
    {
      'augment': 'Cranial Signal Processors - Gen II', 'source': '', 'prerequisite': '', 'price': '$125.000m', 'reputation': '18.750k rep', 'effects': '+7% hacking skill , +2% faster hack(), grow(), and weaken() , +5% hack() success chance', 'description': 'The second generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn\'t have to.',
    },
    {
      'augment': 'Cranial Signal Processors - Gen III', 'source': '', 'prerequisite': '', 'price': '$550.000m', 'reputation': '50.000k rep', 'effects': '+9% hacking skill, +2% faster hack(), grow(), and weaken(), +15% hack() power', 'description': 'The third generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn\'t have to.',
    },
    {
      'augment': 'Cranial Signal Processors - Gen IV', 'source': '', 'prerequisite': '', 'price': '$1.100b', 'reputation': '125.000k rep', 'effects': '+2% faster hack(), grow(), and weaken(), +20% hack() power, +25% grow() power', 'description': 'The fourth generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn\'t have to.',
    },
    {
      'augment': 'Cranial Signal Processors - Gen V ', 'source': '', 'prerequisite': '', 'price': '$2.250b', 'reputation': '250.000k rep', 'effects': '+30% hacking skill, +25% hack() power, +75% grow() power', 'description': 'The fifth generation of Cranial Signal Processors. Cranial Signal Processors are a set of specialized microprocessors that are attached to neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations so that the brain doesn\'t have to.',
    },
    {
      'augment': 'CRTX42-AA Gene Modification', 'source': 'NiteSec', 'prerequisite': '', 'price': '$225.000m', 'reputation': '45.000k rep', 'effects': '+8% hacking skill, +15% hacking exp', 'description': 'The CRTX42-AA gene is injected into the genome. The CRTX42-AA is an artificially-synthesized gene that targets the visual and prefrontal cortex and improves cognitive abilities.',
    },
    {
      'augment': 'DataJack', 'source': '', 'prerequisite': '', 'price': '$450.000m', 'reputation': '112.500k rep', 'effects': '+25% hack() power', 'description': 'A brain implant that provides an interface for direct, wireless communication between a computer\'s main memory and the mind.This implant allows the user to not only access a computer\'s memory, but also alter and delete it.',
    },
    {
      'augment': 'DermaForce Particle Barrier', 'source': '', 'prerequisite': '', 'price': '$50.000m', 'reputation': '15.000k rep', 'effects': '+40% defense skill', 'description': 'Synthetic skin that is grafted onto the body. This skin consists of millions of nanobots capable of projecting high-density muon beams, creating an energy barrier around the user.',
    },
    {
      'augment': 'Embedded Netburner Module', 'source': '', 'prerequisite': '', 'price': '$250.000m', 'reputation': '15.000k rep', 'effects': '+8% hacking skill', 'description': 'A thin device embedded inside the arm containing a wireless module capable of connecting to nearby networks. Once connected, the Netburner Module is capable of capturing and processing all of the traffic on that network. By itself, the Embedded Netburner Module does not do much, but a variety of very powerful upgrades can be installed that allow you to fully control the traffic on a network.',
    },
    {
      'augment': 'Embedded Netburner Module Analyze Engine', 'source': '', 'prerequisite': '', 'price': '$6.000b', 'reputation': '625.000k rep', 'effects': '+10% faster hack(), grow(), and weaken()', 'description': 'Installs the Analyze Engine for the Embedded Netburner Module, which is a CPU cluster that vastly outperforms the Netburner Module\'s native single - core processor.',
    },
    {
      'augment': 'Embedded Netburner Module Core Implant', 'source': '', 'prerequisite': '', 'price': '$2.500b', 'reputation': '175.000k rep', 'effects': '+7% hacking skill, +7% hacking exp, +3% faster hack(), grow(), and weaken(), +3% hack() success chance, +10% hack() power', 'description': 'The Core library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgrade allows the Embedded Netburner Module to generate its own data on a network.',
    },
    {
      'augment': 'Embedded Netburner Module Core V2 Upgrade', 'source': '', 'prerequisite': '', 'price': '$4.500b', 'reputation': '1.000m rep', 'effects': '+8% hacking skill, +15% hacking exp, +5% faster hack(), grow(), and weaken(), +5% hack() success chance, +30% hack() power', 'description': 'The Core V2 library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgraded firmware allows the Embedded Netburner Module to control information on a network by re-routing traffic, spoofing IP addresses, and altering the data inside network packets.',
    },
    {
      'augment': 'Embedded Netburner Module Core V3 Upgrade', 'source': '', 'prerequisite': '', 'price': '$7.500b', 'reputation': '1.750m rep', 'effects': '+10% hacking skill, +25% hacking exp, +5% faster hack(), grow(), and weaken(), +10% hack() success chance, +40% hack() power', 'description': 'The Core V3 library is an implant that upgrades the firmware of the Embedded Netburner Module. This upgraded firmware allows the Embedded Netburner Module to seamlessly inject code into any device on a network.',
    },
    {
      'augment': 'Embedded Netburner Module Direct Memory Access Upgrade', 'source': '', 'prerequisite': '', 'price': '$7.000b', 'reputation': '1.000m rep', 'effects': '+20% hack() success chance +40% hack() power', 'description': 'This implant installs a Direct Memory Access (DMA) controller into the Embedded Netburner Module. This allows the Module to send and receive data directly to and from the main memory of devices on a network.',
    },
    {
      'augment': 'Enhanced Myelin Sheathing', 'source': '', 'prerequisite': '', 'price': '$1.375b', 'reputation': '100.000k rep', 'effects': '+8% hacking skill, +10% hacking exp, +3% faster hack(), grow(), and weaken()', 'description': 'Electrical signals are used to induce a new, artificial form of myelinogenesis in the human body. This process results in the proliferation of new, synthetic myelin sheaths in the nervous system. These myelin sheaths can propogate neuro-signals much faster than their organic counterparts, leading to greater processing speeds and better brain function.',
    },
    {
      'augment': 'Graphene Bionic Arms Upgrade', 'source': '', 'prerequisite': '', 'price': '$3.750b', 'reputation': '500.000k rep', 'effects': '', 'description': '',
    },
    {
      'augment': 'Graphene Bone Lacings', 'source': '', 'prerequisite': '', 'price': '$4.250b', 'reputation': '1.125m rep', 'effects': '', 'description': '',
    },
    {
      'augment': 'Graphene BrachiBlades Upgrade', 'source': '', 'prerequisite': '', 'price': '$2.500b', 'reputation': '225.000k rep', 'effects': '+40% strength skill, +40% defense skill, +30% crime money, +10% crime success rate', 'description': 'An upgrade to the BrachiBlades augmentation. It infuses the retractable blades with an advanced graphene material making them stronger and lighter.',
    },
    {
      'augment': 'Hacknet Node Cache Architecture Neural-Upload', 'source': 'Netburners', 'prerequisite': '', 'price': '$5.500m', 'reputation': '1.875k rep', 'effects': '+10% hacknet production, - 15% hacknet nodes upgrade cost', 'description': 'Uploads the architecture and design details of a Hacknet Node\'s main-memory cache into the brain. This allows the user to engineer custom cache hardware for the Hacknet Node that offers better performance.',
    },
    {
      'augment': 'Hacknet Node Core Direct-Neural Interface', 'source': 'Netburners', 'prerequisite': '', 'price': '$60.000m', 'reputation': '12.500k rep', 'effects': '+45% hacknet production', 'description': 'Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a Hacknet Node. This lets the user access and manipulate the Node\'s processing logic using electrochemical signals.',
    },
    {
      'augment': 'Hacknet Node CPU Architecture Neural-Upload', 'source': 'Netburners', 'prerequisite': '', 'price': '$11.000m', 'reputation': '3.750k rep', 'effects': '+15% hacknet production, -15% hacknet nodes cost', 'description': 'Uploads the architecture and design details of a Hacknet Node\'s CPU into the brain.This allows the user to engineer custom hardware and software for the Hacknet Node that provides better performance.',
    },
    {
      'augment': 'Hacknet Node Kernel Direct-Neural Interface', 'source': 'Netburners', 'prerequisite': '', 'price': '$40.000m', 'reputation': '7.500k rep', 'effects': '+25% hacknet production', 'description': 'Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a Hacknet Node. This lets the user access and manipulate the Node\'s kernel using electrochemical signals.',
    },
    {
      'augment': 'Hacknet Node NIC Architecture Neural-Upload', 'source': 'Netburners', 'prerequisite': '', 'price': '$4.500m', 'reputation': '1.875k rep', 'effects': '+10% hacknet production, -10% hacknet nodes cost', 'description': 'Uploads the architecture and design details of a Hacknet Node\'s Network Interface Card(NIC) into the brain.This allows the user to engineer a custom NIC for the Hacknet Node that offers better performance.',
    },
    {
      'augment': 'HemoRecirculator', 'source': '', 'prerequisite': '', 'price': '$45.000m', 'reputation': '10.000k rep', 'effects': '+8% combat skills', 'description': 'A heart implant that greatly increases the body\'s ability to effectively use and pump blood.',
    },
    {
      'augment': 'INFRARET Enhancement', 'source': '', 'prerequisite': '', 'price': '$30.000m', 'reputation': '7.500k rep', 'effects': '+10% dexterity skill, +10% crime money, +25% crime success rate', 'description': 'A tiny chip that sits behind the retinae. This implant lets the user visually detect infrared radiation.',
    },
    {
      'augment': 'LuminCloaking-V1 Skin Implant', 'source': '', 'prerequisite': '', 'price': '', 'reputation': '', 'effects': '+5% agility skill, +10% crime money', 'description': 'A skin implant that reinforces the skin with highly-advanced synthetic cells. These cells, when powered, have a negative refractive index. As a result, they bend light around the skin, making the user much harder to see with the naked eye.',
    },
    {
      'augment': 'LuminCloaking-V2 Skin Implant', 'source': '', 'prerequisite': '', 'price': '$30.000m', 'reputation': '5.000k rep', 'effects': '+10% defense skill, +10% agility skill, +25% crime money', 'description': 'This is a more advanced version of the LuminCloaking-V1 augmentation. This skin implant reinforces the skin with highly-advanced synthetic cells. These cells, when powered, are capable of not only bending light but also of bending heat, making the user more resilient as well as stealthy.',
    },
    {
      'augment': 'Nanofiber Weave', 'source': '', 'prerequisite': '', 'price': '$125.000m', 'reputation': '37.500k rep', 'effects': '+20% strength skill, +20% defense skill', 'description': 'Synthetic nanofibers are woven into the skin\'s extracellular matrix using electrospinning, which improves its regenerative and extracellular homeostasis abilities.',
    },
    {
      'augment': 'NEMEAN Subdermal Weave', 'source': '', 'prerequisite': '', 'price': '$3.250b', 'reputation': '875.000k rep', 'effects': '+120% defense skill', 'description': 'The NEMEAN Subdermal Weave is a thin, light-weight, graphene plating that houses a dilatant fluid. The material is implanted underneath the skin, and is the most advanced form of defensive enhancement that has ever been created. The dilatant fluid, despite being thin and light, is extremely effective at stopping piercing blows and reducing blunt trauma. The properties of graphene allow the plating to mitigate damage from any fire or electrical traumas.',
    },
    {
      'augment': 'Neural Accelerator', 'source': '', 'prerequisite': '', 'price': '$1.750b', 'reputation': '200.000k rep', 'effects': '+10% hacking skill, +15% hacking exp, +20% hack() power', 'description': 'A microprocessor that accelerates the processing speed of biological neural networks. This is a cranial implant that is embedded inside the brain.',
    },
    {

      'augment': 'Neural-Retention Enhancement', 'source': 'NiteSec', 'prerequisite': '', 'price': '$250.000m', 'reputation': '20.000k rep', 'effects': '+25% hacking exp', 'description': 'Chemical injections are used to permanently alter and strengthen the brain\'s neuronal circuits, strengthening the ability to retain information.',
    },
    {
      'augment': 'Neuralstimulator', 'source': '', 'prerequisite': '', 'price': '$3.00b', 'reputation': '50.00k rep', 'effects': '+12% hacking exp, +2% faster hack(), grow(), and weaken(), +10% hack() success chance', 'description': 'A cranial implant that intelligently stimulates certain areas of the brain in order to improve cognitive functions.',
    },
    {
      'augment': 'Neuregen Gene Modification', 'source': '', 'prerequisite': '', 'price': '$375.000m', 'reputation': '37.500k rep', 'effects': '+40% hacking exp', 'description': 'A drug that genetically modifies the neurons in the brain resulting in neurons that never die, continuously regenerate, and strengthen themselves.',
    },
    {
      'augment': 'NeuroFlux Governor', 'source': '', 'prerequisite': '', 'price': '$750.000k', 'reputation': '500.000 rep', 'effects': 'This special augmentation can be leveled up infinitely. Each level of this augmentation increases MOST multipliers by 1% (+0.000030%), stacking multiplicatively. The power of NeuroFlux Governor increases with blood donations from players in real life.', 'description': 'Undetectable adamntium nanobots injected in the users bloodstream. The NeuroFlux Governor monitors and regulates all aspects of the human body, essentially \'governing\' the body. By doing so, it improves the users performance for most actions.',
    },
    {
      'augment': 'Neuroreceptor Management Implant', 'source': 'Tian Di Hui', 'prerequisite': '', 'price': '$550.000m', 'reputation': '75.000k rep', 'effects': 'This augmentation removes the penalty for not focusing on actions such as working in a job or working for a augment.', 'description': 'A brain implant carefully assembled around the synapses, which micromanages the activity and levels of various neuroreceptor chemicals and modulates electrical activity to optimize concentration, allowing the user to multitask much more effectively.',
    },
    {
      'augment': 'Neurotrainer I', 'source': '', 'prerequisite': '', 'price': '$4.000m', 'reputation': '1.000k rep', 'effects': '+10% exp for all skills', 'description': 'A decentralized cranial implant that improves the brain\'s ability to learn. It is installed by releasing millions of nanobots into the human brain, each of which attaches to a different neural pathway to enhance the brain\'s ability to retain and retrieve information.',
    },
    {
      'augment': 'Neurotrainer II', 'source': '', 'prerequisite': '', 'price': '$45.000m', 'reputation': '10.000k rep', 'effects': '+15% exp for all skills', 'description': 'A decentralized cranial implant that improves the brain\'s ability to learn.This is a more powerful version of the Neurotrainer I augmentation, but it does not require Neurotrainer I to be installed as a prerequisite.',
    },
    {
      'augment': 'Nuoptimal Nootropic Injector Implant', 'source': '', 'prerequisite': '', 'price': '$20.000m', 'reputation': '5.000k rep', 'effects': '+20% reputation from companies', 'description': 'This torso implant automatically injects nootropic supplements into the bloodstream to improve memory, increase focus, and provide other cognitive enhancements.',
    },
    {
      'augment': 'NutriGen Implant', 'source': '', 'prerequisite': '', 'price': '$2.500m', 'reputation': '6.250k rep', 'effects': '+20% combat exp', 'description': 'A thermo-powered artificial nutrition generator. Endogenously synthesizes glucose, amino acids, and vitamins and redistributes them across the body. The device is powered by the body\'s naturally wasted energy in the form of heat.',
    },
    {
      'augment': 'PCMatrix', 'source': '', 'prerequisite': '', 'price': '$2.000b', 'reputation': '100.000k rep', 'effects': '+7.77% charisma skill, +7.77% charisma exp, +7.77% reputation from augments and companies, +7.77% crime money, +7.77% crime success rate, +77.7% work money, Start with DeepscanV1.exe and AutoLink.exe after installing effects.', 'description': 'A \'Probability Computation Matrix\' is installed in the frontal cortex. This implant uses advanced mathematical algorithims to rapidly identify and compute statistical outcomes of nearly every situation.',
    },
    {
      'augment': 'Power Recirculation Core', 'source': '', 'prerequisite': '', 'price': '$180.000m', 'reputation': '25.000k rep', 'effects': '+5% all skills, + 10% exp for all skills', 'description': 'The body\'s nerves are attached with polypyrrole nanocircuits that are capable of capturing wasted energy, in the form of heat, and converting it back into usable power.',
    },
    {
      'augment': 'SmartSonar Implant', 'source': '', 'prerequisite': '', 'price': '$75.000m', 'reputation': '22.500k rep', 'effects': '+10% dexterity skill, +15% dexterity exp, +25% crime money', 'description': 'A cochlear implant that helps the player detect and locate enemies using sound propagation.',
    },
    {
      'augment': 'SoA - Beauty of Aphrodite', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Bribe minigame easier by indicating the incorrect paths', 'description': 'Pheromone extruder injected in the thoracodorsal nerve. Emits pleasing scent guaranteed to make conversational partners more agreeable.',
    },
    {
      'augment': 'SoA - Chaos of Dionysus', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Backwards minigame easier by flipping the words.', 'description': 'Opto-occipito implant to process visual signals before brain interpretation.',
    },
    {
      'augment': 'SoA - Flood of Poseidon', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Symbol matching minigame easier by indicating the correct choice.', 'description': 'Transtinatium VVD reticulator used in optico-sterbing recognition.',
    },
    {
      'augment': 'SoA - Hunt of Artemis', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Minesweeper minigame easier by showing the location of all mines and keeping their position.', 'description': 'magneto-turboencabulator based on technology by Micha Eike Siemon, increases the user\'s electro - magnetic sensitivity.',
    },
    {
      'augment': 'SoA - Knowledge of Apollo', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Wire Cutting minigame easier by indicating the incorrect wires.', 'description': 'Neodynic retention fjengln spoofer using -Φ karmions, net positive effect on implantee\'s delta wave.',
    },
    {
      'augment': 'SoA - Might of Ares', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Slash minigame easier by showing you via an indicator when the slash is coming.', 'description': 'Extra-occular neurons taken from old martial art master. Injecting them gives the user the ability to predict the enemy\'s attack before they even know it themself.',
    },
    {
      'augment': 'SoA - phyzical WKS harmonizer', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes many aspects of infiltration easier and more productive. Such as increased timer, rewards, reduced damage taken, etc.', 'description': 'A copy of the WKS harmonizer from the MIA leader of the Shadows of Anarchy injects *Γ-based cells that provides general enhancement to the body.',
    },
    {
      'augment': 'SoA - Trickery of Hermes', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the Cheat Code minigame easier by allowing the opposite character.', 'description': 'Penta-dynamo-neurovascular-valve inserted in the carpal ligament, enhances dexterity.',
    },
    {
      'augment': 'SoA - Wisdom of Athena', 'source': '', 'prerequisite': '', 'price': '$1.000m', 'reputation': '10.000k rep', 'effects': 'This augmentation makes the bracket minigame easier by removing all \'[\' \']\'.', 'description': 'A connective brain implant to SASHA that focuses on pattern recognition and predictive templating.',
    },
    {
      'augment': 'Social Negotiation Assistant (S.N.A)', 'source': 'Tian Di Hui', 'prerequisite': '', 'price': '$30.000m', 'reputation': '6.250k rep', 'effects': '+15% reputation from augments and companies, +10% work money', 'description': 'A cranial implant that affects the user\'s personality, making them better at negotiation in social situations.',
    },
    {
      'augment': 'Speech Enhancement', 'source': '', 'prerequisite': '', 'price': '$12.500m', 'reputation': '2.500k rep', 'effects': '+10% charisma skill, +10% reputation from companies', 'description': 'An advanced neural implant that improves your speaking abilities, making you more convincing and likable in conversations and overall improving your social interactions.',
    },
    {
      'augment': 'Speech Processor Implant', 'source': '', 'prerequisite': '', 'price': '$50.000m', 'reputation': '7.500k rep', 'effects': '+20% charisma skill', 'description': 'A cochlear implant with an embedded computer that analyzes incoming speech. The embedded computer processes characteristics of incoming speech, such as tone and inflection, to pick up on subtle cues and aid in social interactions.',
    },
    {
      'augment': 'SPTN-97 Gene Modification', 'source': '', 'prerequisite': '', 'price': '$4.875b', 'reputation': '1.250m rep', 'effects': '', 'description': '',
    },
    {
      'augment': 'Synaptic Enhancement Implant', 'source': '', 'prerequisite': '', 'price': '$7.500m', 'reputation': '2.000k rep', 'effects': '+3% faster hack(), grow(), and weaken()', 'description': 'A small cranial implant that continuously uses weak electrical signals to stimulate the brain and induce stronger synaptic activity. This improves the user\'s cognitive abilities.',
    },
    {
      'augment': 'Synfibril Muscle', 'source': '', 'prerequisite': '', 'price': '$1.125b', 'reputation': '437.500k rep', 'effects': '+30% strength skill, +30% defense skill', 'description': 'The myofibrils in human muscles are injected with special chemicals that react with the proteins inside the myofibrils, altering their underlying structure. The end result is muscles that are stronger and more elastic. Scientists have named these artificially enhanced units \'synfibrils\'.',
    },
    {
      'augment': 'Synthetic Heart', 'source': '', 'prerequisite': '', 'price': '$2.875b', 'reputation': '750.000k rep', 'effects': '+50% strength skill, +50% agility skill', 'description': 'This advanced artificial heart, created from plasteel and graphene, is capable of pumping blood more efficiently than an organic heart.',
    },
    {
      'augment': 'The Black Hand', 'source': '', 'prerequisite': '', 'price': '$550.000m', 'reputation': '100.000k rep', 'effects': '+10% hacking skill, +15% strength skill, +15% dexterity skill, +2% faster hack(), grow(), and weaken(), +10% hack() power', 'description': 'A highly advanced bionic hand. This prosthetic not only enhances strength and dexterity but it is also embedded with hardware and firmware that lets the user connect to, access, and hack devices and machines by just touching them.',
    },
    {
      'augment': 'The Red Pill', 'source': '', 'prerequisite': '', 'price': '0', 'reputation': '2.500m rep', 'effects': 'Adds w0r1d_d43m0n to network topology', 'description': 'It\'s time to leave the cave.',
    },
    {
      'augment': 'The Shadow\'s Simulacrum', 'source': '', 'prerequisite': '', 'price': '$400.000m', 'reputation': '37.500k rep', 'effects': ' + 15% reputation from augments and companies', 'description': 'A crude but functional matter phase - shifter module that is embedded in the brainstem and cerebellum.This augmentation was developed by criminal organizations and allows the user to project and control holographic simulacrums within a large radius.These simulacrums are commonly used for espionage and surveillance work.',
    },
    {
      'augment': 'Unstable Circadian Modulator', 'source': '', 'prerequisite': '', 'price': '$5.000b', 'reputation': '362.500k rep', 'effects': '', 'description': '',
    },
    {
      'augment': 'Wired Reflexes', 'source': '', 'prerequisite': '', 'price': '$2.500m', 'reputation': '1.250k rep', 'effects': '+5% dexterity skill, +5% agility skill', 'description': 'Synthetic nerve-enhancements are injected into all major parts of the somatic nervous system, supercharging the spread of neural signals and increasing reflex speed.',
    },
  ]
};
const augmentsListTemplate = ({
  augment,
  prerequisite,
  source,
  price,
  reputation,
  effects,
  description,
}) => `
<div class="card rounded-0 mt-3 shadow">
  <div class="card-body">
  <p class="card-text float-end"><small class="text-muted">Augment</small></p>
    <h6 class="card-title fw-bold">${augment}</h6>
    <p class="card-text"><small class="text-secondary">${description}</small></p>
    <p class="card-text"><strong>Source: </strong>${source}</p>
    <p class="card-text"><strong>Price: </strong>${price} / <strong>Rep: </strong>${reputation}</p>
    <p class="card-text"><strong>Effects: </strong><br><span class="card-text effects-links">${effects.replaceAll(', ', '<br>')}</span></p>
   
  </div>
</div>
`;

const augmentsTable = allAugments.list.map(augmentsListTemplate);

document.querySelector('#all-augments-data').innerHTML = augmentsTable.join("");