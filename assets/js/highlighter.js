function highlights() {

  // Factions

  const cybersec = localStorage.getItem("faction-checkbox-1");
  const netburners = localStorage.getItem("faction-checkbox-2");
  const shadows_of_anarchy = localStorage.getItem("faction-checkbox-3");
  const tian_di_hui = localStorage.getItem("faction-checkbox-4");

  const bitrunners = localStorage.getItem("faction-checkbox-5");
  const nitesec = localStorage.getItem("faction-checkbox-6");
  const the_black_hand = localStorage.getItem("faction-checkbox-7");

  const aevum = localStorage.getItem("faction-checkbox-8");
  const chongqing = localStorage.getItem("faction-checkbox-9");
  const ishima = localStorage.getItem("faction-checkbox-10");
  const new_tokyo = localStorage.getItem("faction-checkbox-11");
  const sector_12 = localStorage.getItem("faction-checkbox-12");
  const volhaven = localStorage.getItem("faction-checkbox-13");

  const daedalus = localStorage.getItem("faction-checkbox-14");
  const illuminati = localStorage.getItem("faction-checkbox-15");
  const the_covenant = localStorage.getItem("faction-checkbox-16");

  const silhouette = localStorage.getItem("faction-checkbox-17");
  const slum_snakes = localStorage.getItem("faction-checkbox-18");
  const speakers_for_the_dead = localStorage.getItem("faction-checkbox-19");
  const tetrads = localStorage.getItem("faction-checkbox-20");
  const the_dark_army = localStorage.getItem("faction-checkbox-21");
  const the_syndicate = localStorage.getItem("faction-checkbox-22");

  const bachman_and_associates = localStorage.getItem("faction-checkbox-23");
  const blade_industries = localStorage.getItem("faction-checkbox-24");
  const clarke_incorporated = localStorage.getItem("faction-checkbox-25");
  const ecorp = localStorage.getItem("faction-checkbox-26");
  const four_sigma = localStorage.getItem("faction-checkbox-27");
  const fulcrum_secret_technologies = localStorage.getItem("faction-checkbox-28");
  const kuaigong_international = localStorage.getItem("faction-checkbox-29");
  const megacorp = localStorage.getItem("faction-checkbox-30");
  const nwo = localStorage.getItem("faction-checkbox-31");
  const omnitek_incorporated = localStorage.getItem("faction-checkbox-32");

  // Augmentations

  const ADR_V1_Pheromone_Gene = localStorage.getItem("augment-checkbox-1");
  const ADR_V2_Pheromone_Gene = localStorage.getItem("augment-checkbox-2");
  const Artificial_Bio_neural_Network_Implant = localStorage.getItem("augment-checkbox-3");
  const Artificial_Synaptic_Potentiation = localStorage.getItem("augment-checkbox-4");
  const Augmented_Targeting_I = localStorage.getItem("augment-checkbox-5");
  const Augmented_Targeting_II = localStorage.getItem("augment-checkbox-6");
  const Augmented_Targeting_III = localStorage.getItem("augment-checkbox-7");
  const Bionic_Arms = localStorage.getItem("augment-checkbox-8");
  const Bionic_Legs = localStorage.getItem("augment-checkbox-9");
  const Bionic_Spine = localStorage.getItem("augment-checkbox-10");
  const BitRunners_Neurolink = localStorage.getItem("augment-checkbox-11");
  const BitWire = localStorage.getItem("augment-checkbox-12");
  const BrachiBlades = localStorage.getItem("augment-checkbox-13");
  const CashRoot_Starter_Kit = localStorage.getItem("augment-checkbox-14");
  const Combat_Rib_I = localStorage.getItem("augment-checkbox-15");
  const Combat_Rib_II = localStorage.getItem("augment-checkbox-16");
  const Combat_Rib_III = localStorage.getItem("augment-checkbox-17");
  const CordiARC_Fusion_Reactor = localStorage.getItem("augment-checkbox-18");
  const Cranial_Signal_Processors_Gen_I = localStorage.getItem("augment-checkbox-19");
  const Cranial_Signal_Processors_Gen_II = localStorage.getItem("augment-checkbox-20");
  const Cranial_Signal_Processors_Gen_III = localStorage.getItem("augment-checkbox-21");
  const Cranial_Signal_Processors_Gen_IV = localStorage.getItem("augment-checkbox-22");
  const Cranial_Signal_Processors_Gen_V = localStorage.getItem("augment-checkbox-23");
  const CRTX42_AA_Gene_Modification = localStorage.getItem("augment-checkbox-24");
  const DataJack = localStorage.getItem("augment-checkbox-25");
  const DermaForce_Particle_Barrier = localStorage.getItem("augment-checkbox-26");
  const ECorp_HVMind_Implant = localStorage.getItem("augment-checkbox-27");
  const Embedded_Netburner_Module = localStorage.getItem("augment-checkbox-28");
  const Embedded_Netburner_Module_Analyze_Engine = localStorage.getItem("augment-checkbox-29");
  const Embedded_Netburner_Module_Core_Implant = localStorage.getItem("augment-checkbox-30");
  const Embedded_Netburner_Module_Core_V2_Upgrade = localStorage.getItem("augment-checkbox-31");
  const Embedded_Netburner_Module_Core_V3_Upgrade = localStorage.getItem("augment-checkbox-32");
  const Embedded_Netburner_Module_Direct_Memory_Access_Upgrade = localStorage.getItem("augment-checkbox-33");
  const Enhanced_Myelin_Sheathing = localStorage.getItem("augment-checkbox-34");
  const Enhanced_Social_Interaction_Implant = localStorage.getItem("augment-checkbox-35");
  const FocusWire = localStorage.getItem("augment-checkbox-36");
  const Graphene_Bionic_Arms_Upgrade = localStorage.getItem("augment-checkbox-37");
  const Graphene_Bionic_Legs_Upgrade = localStorage.getItem("augment-checkbox-38");
  const Graphene_Bionic_Spine_Upgrade = localStorage.getItem("augment-checkbox-39");
  const Graphene_Bone_Lacings = localStorage.getItem("augment-checkbox-40");
  const Graphene_BrachiBlades_Upgrade = localStorage.getItem("augment-checkbox-41");
  const Hacknet_Node_Cache_Architecture_Neural_Upload = localStorage.getItem("augment-checkbox-42");
  const Hacknet_Node_Core_Direct_Neural_Interface = localStorage.getItem("augment-checkbox-43");
  const Hacknet_Node_CPU_Architecture_Neural_Upload = localStorage.getItem("augment-checkbox-44");
  const Hacknet_Node_Kernel_Direct_Neural_Interface = localStorage.getItem("augment-checkbox-45");
  const Hacknet_Node_NIC_Architecture_Neural_Upload = localStorage.getItem("augment-checkbox-46");
  const HemoRecirculator = localStorage.getItem("augment-checkbox-47");
  const Hydroflame_Left_Arm = localStorage.getItem("augment-checkbox-48");
  const HyperSight_Corneal_Implant = localStorage.getItem("augment-checkbox-49");
  const INFRARET_Enhancement = localStorage.getItem("augment-checkbox-50");
  const LuminCloaking_V1_Skin_Implant = localStorage.getItem("augment-checkbox-51");
  const LuminCloaking_V2_Skin_Implant = localStorage.getItem("augment-checkbox-52");
  const Nanofiber_Weave = localStorage.getItem("augment-checkbox-53");
  const NEMEAN_Subdermal_Weave = localStorage.getItem("augment-checkbox-54");
  const Neotra = localStorage.getItem("augment-checkbox-55");
  const Neural_Accelerator = localStorage.getItem("augment-checkbox-56");
  const Neural_Retention_Enhancement = localStorage.getItem("augment-checkbox-57");
  const Neuralstimulator = localStorage.getItem("augment-checkbox-58");
  const Neuregen_Gene_Modification = localStorage.getItem("augment-checkbox-59");
  const NeuroFlux_Governor = localStorage.getItem("augment-checkbox-60");
  const Neuronal_Densification = localStorage.getItem("augment-checkbox-61");
  const Neuroreceptor_Management_Implant = localStorage.getItem("augment-checkbox-62");
  const Neurotrainer_I = localStorage.getItem("augment-checkbox-63");
  const Neurotrainer_II = localStorage.getItem("augment-checkbox-64");
  const Neurotrainer_III = localStorage.getItem("augment-checkbox-65");
  const nextSENS_Gene_Modification = localStorage.getItem("augment-checkbox-66");
  const Nuoptimal_Nootropic_Injector_Implant = localStorage.getItem("augment-checkbox-67");
  const NutriGen_Implant = localStorage.getItem("augment-checkbox-68");
  const OmniTek_InfoLoad = localStorage.getItem("augment-checkbox-69");
  const PC_Direct_Neural_Interface = localStorage.getItem("augment-checkbox-70");
  const PC_Direct_Neural_Interface_NeuroNet_Injector = localStorage.getItem("augment-checkbox-71");
  const PC_Direct_Neural_Interface_Optimization_Submodule = localStorage.getItem("augment-checkbox-72");
  const PCMatrix = localStorage.getItem("augment-checkbox-73");
  const Photosynthetic_Cells = localStorage.getItem("augment-checkbox-74");
  const Power_Recirculation_Core = localStorage.getItem("augment-checkbox-75");
  const QLink = localStorage.getItem("augment-checkbox-76");
  const SmartJaw = localStorage.getItem("augment-checkbox-77");
  const SmartSonar_Implant = localStorage.getItem("augment-checkbox-78");
  const SoA_Beauty_of_Aphrodite = localStorage.getItem("augment-checkbox-79");
  const SoA_Chaos_of_Dionysus = localStorage.getItem("augment-checkbox-80");
  const SoA_Flood_of_Poseidon = localStorage.getItem("augment-checkbox-81");
  const SoA_Hunt_of_Artemis = localStorage.getItem("augment-checkbox-82");
  const SoA_Knowledge_of_Apollo = localStorage.getItem("augment-checkbox-83");
  const SoA_Might_of_Ares = localStorage.getItem("augment-checkbox-84");
  const SoA_phyzical_WKS_harmonizer = localStorage.getItem("augment-checkbox-85");
  const SoA_Trickery_of_Hermes = localStorage.getItem("augment-checkbox-86");
  const SoA_Wisdom_of_Athena = localStorage.getItem("augment-checkbox-87");
  const Social_Negotiation_Assistant = localStorage.getItem("augment-checkbox-88");
  const Speech_Enhancement = localStorage.getItem("augment-checkbox-89");
  const Speech_Processor_Implant = localStorage.getItem("augment-checkbox-90");
  const SPTN_97_Gene_Modification = localStorage.getItem("augment-checkbox-91");
  const Synaptic_Enhancement_Implant = localStorage.getItem("augment-checkbox-92");
  const Synfibril_Muscle = localStorage.getItem("augment-checkbox-93");
  const Synthetic_Heart = localStorage.getItem("augment-checkbox-94");
  const The_Black_Hand = localStorage.getItem("augment-checkbox-95");
  const The_Red_Pill = localStorage.getItem("augment-checkbox-96");
  const The_Shadows_Simulacrum = localStorage.getItem("augment-checkbox-97");
  const TITN_41_Gene_Modification_Injection = localStorage.getItem("augment-checkbox-98");
  const Unstable_Circadian_Modulator = localStorage.getItem("augment-checkbox-99");
  const Wired_Reflexes = localStorage.getItem("augment-checkbox-100");
  const Xanipher = localStorage.getItem("augment-checkbox-101");

  console.log(bachman_and_associates)
}
