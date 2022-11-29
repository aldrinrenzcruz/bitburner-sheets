function masterHighlighter() {
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

  // const adr_v1_pheromone_gene = localStorage.getItem("augment-checkbox-1");
  // const adr_v2_pheromone_gene = localStorage.getItem("augment-checkbox-2");
  // const artificial_bio_neural_network_implant = localStorage.getItem("augment-checkbox-3");
  // const artificial_synaptic_potentiation = localStorage.getItem("augment-checkbox-4");
  // const augmented_targeting_i = localStorage.getItem("augment-checkbox-5");
  // const augmented_targeting_ii = localStorage.getItem("augment-checkbox-6");
  // const augmented_targeting_iii = localStorage.getItem("augment-checkbox-7");
  // const bionic_arms = localStorage.getItem("augment-checkbox-8");
  // const bionic_legs = localStorage.getItem("augment-checkbox-9");
  // const bionic_spine = localStorage.getItem("augment-checkbox-10");
  // const bitrunners_neurolink = localStorage.getItem("augment-checkbox-11");
  // const bitwire = localStorage.getItem("augment-checkbox-12");
  // const brachiblades = localStorage.getItem("augment-checkbox-13");
  // const cashroot_starter_kit = localStorage.getItem("augment-checkbox-14");
  // const combat_rib_i = localStorage.getItem("augment-checkbox-15");
  // const combat_rib_ii = localStorage.getItem("augment-checkbox-16");
  // const combat_rib_iii = localStorage.getItem("augment-checkbox-17");
  // const cordiarc_fusion_reactor = localStorage.getItem("augment-checkbox-18");
  // const cranial_signal_processors_gen_i = localStorage.getItem("augment-checkbox-19");
  // const cranial_signal_processors_gen_ii = localStorage.getItem("augment-checkbox-20");
  // const cranial_signal_processors_gen_iii = localStorage.getItem("augment-checkbox-21");
  // const cranial_signal_processors_gen_iv = localStorage.getItem("augment-checkbox-22");
  // const cranial_signal_processors_gen_v = localStorage.getItem("augment-checkbox-23");
  // const crtx42_aa_gene_modification = localStorage.getItem("augment-checkbox-24");
  // const datajack = localStorage.getItem("augment-checkbox-25");
  // const dermaforce_particle_barrier = localStorage.getItem("augment-checkbox-26");
  // const ecorp_hvmind_implant = localStorage.getItem("augment-checkbox-27");
  // const embedded_netburner_module = localStorage.getItem("augment-checkbox-28");
  // const embedded_netburner_module_analyze_engine = localStorage.getItem("augment-checkbox-29");
  // const embedded_netburner_module_core_implant = localStorage.getItem("augment-checkbox-30");
  // const embedded_netburner_module_core_v2_upgrade = localStorage.getItem("augment-checkbox-31");
  // const embedded_netburner_module_core_v3_upgrade = localStorage.getItem("augment-checkbox-32");
  // const embedded_netburner_module_direct_memory_access_upgrade = localStorage.getItem("augment-checkbox-33");
  // const enhanced_myelin_sheathing = localStorage.getItem("augment-checkbox-34");
  // const enhanced_social_interaction_implant = localStorage.getItem("augment-checkbox-35");
  // const focuswire = localStorage.getItem("augment-checkbox-36");
  // const graphene_bionic_arms_upgrade = localStorage.getItem("augment-checkbox-37");
  // const graphene_bionic_legs_upgrade = localStorage.getItem("augment-checkbox-38");
  // const graphene_bionic_spine_upgrade = localStorage.getItem("augment-checkbox-39");
  // const graphene_bone_lacings = localStorage.getItem("augment-checkbox-40");
  // const graphene_brachiblades_upgrade = localStorage.getItem("augment-checkbox-41");
  // const hacknet_node_cache_architecture_neural_upload = localStorage.getItem("augment-checkbox-42");
  // const hacknet_node_core_direct_neural_interface = localStorage.getItem("augment-checkbox-43");
  // const hacknet_node_cpu_architecture_neural_upload = localStorage.getItem("augment-checkbox-44");
  // const hacknet_node_kernel_direct_neural_interface = localStorage.getItem("augment-checkbox-45");
  // const hacknet_node_nic_architecture_neural_upload = localStorage.getItem("augment-checkbox-46");
  // const hemorecirculator = localStorage.getItem("augment-checkbox-47");
  // const hydroflame_left_arm = localStorage.getItem("augment-checkbox-48");
  // const hypersight_corneal_implant = localStorage.getItem("augment-checkbox-49");
  // const infraret_enhancement = localStorage.getItem("augment-checkbox-50");
  // const lumincloaking_v1_skin_implant = localStorage.getItem("augment-checkbox-51");
  // const lumincloaking_v2_skin_implant = localStorage.getItem("augment-checkbox-52");
  // const nanofiber_weave = localStorage.getItem("augment-checkbox-53");
  // const nemean_subdermal_weave = localStorage.getItem("augment-checkbox-54");
  // const neotra = localStorage.getItem("augment-checkbox-55");
  // const neural_accelerator = localStorage.getItem("augment-checkbox-56");
  // const neural_retention_enhancement = localStorage.getItem("augment-checkbox-57");
  // const neuralstimulator = localStorage.getItem("augment-checkbox-58");
  // const neuregen_gene_modification = localStorage.getItem("augment-checkbox-59");
  // const neuroflux_governor = localStorage.getItem("augment-checkbox-60");
  // const neuronal_densification = localStorage.getItem("augment-checkbox-61");
  // const neuroreceptor_management_implant = localStorage.getItem("augment-checkbox-62");
  // const neurotrainer_i = localStorage.getItem("augment-checkbox-63");
  // const neurotrainer_ii = localStorage.getItem("augment-checkbox-64");
  // const neurotrainer_iii = localStorage.getItem("augment-checkbox-65");
  // const nextsens_gene_modification = localStorage.getItem("augment-checkbox-66");
  // const nuoptimal_nootropic_injector_implant = localStorage.getItem("augment-checkbox-67");
  // const nutrigen_implant = localStorage.getItem("augment-checkbox-68");
  // const omnitek_infoload = localStorage.getItem("augment-checkbox-69");
  // const pc_direct_neural_interface = localStorage.getItem("augment-checkbox-70");
  // const pc_direct_neural_interface_neuronet_injector = localStorage.getItem("augment-checkbox-71");
  // const pc_direct_neural_interface_optimization_submodule = localStorage.getItem("augment-checkbox-72");
  // const pcmatrix = localStorage.getItem("augment-checkbox-73");
  // const photosynthetic_cells = localStorage.getItem("augment-checkbox-74");
  // const power_recirculation_core = localStorage.getItem("augment-checkbox-75");
  // const qlink = localStorage.getItem("augment-checkbox-76");
  // const smartjaw = localStorage.getItem("augment-checkbox-77");
  // const smartsonar_implant = localStorage.getItem("augment-checkbox-78");
  // const soa_beauty_of_aphrodite = localStorage.getItem("augment-checkbox-79");
  // const soa_chaos_of_dionysus = localStorage.getItem("augment-checkbox-80");
  // const soa_flood_of_poseidon = localStorage.getItem("augment-checkbox-81");
  // const soa_hunt_of_artemis = localStorage.getItem("augment-checkbox-82");
  // const soa_knowledge_of_apollo = localStorage.getItem("augment-checkbox-83");
  // const soa_might_of_ares = localStorage.getItem("augment-checkbox-84");
  // const soa_phyzical_wks_harmonizer = localStorage.getItem("augment-checkbox-85");
  // const soa_trickery_of_hermes = localStorage.getItem("augment-checkbox-86");
  // const soa_wisdom_of_athena = localStorage.getItem("augment-checkbox-87");
  // const social_negotiation_assistant = localStorage.getItem("augment-checkbox-88");
  // const speech_enhancement = localStorage.getItem("augment-checkbox-89");
  // const speech_processor_implant = localStorage.getItem("augment-checkbox-90");
  // const sptn_97_gene_modification = localStorage.getItem("augment-checkbox-91");
  // const synaptic_enhancement_implant = localStorage.getItem("augment-checkbox-92");
  // const synfibril_muscle = localStorage.getItem("augment-checkbox-93");
  // const synthetic_heart = localStorage.getItem("augment-checkbox-94");
  // const the_black_hand_augment = localStorage.getItem("augment-checkbox-95");
  // const the_red_pill = localStorage.getItem("augment-checkbox-96");
  // const the_shadows_simulacrum = localStorage.getItem("augment-checkbox-97");
  // const titn_41_gene_modification_injection = localStorage.getItem("augment-checkbox-98");
  // const unstable_circadian_modulator = localStorage.getItem("augment-checkbox-99");
  // const wired_reflexes = localStorage.getItem("augment-checkbox-100");
  // const xanipher = localStorage.getItem("augment-checkbox-101");

  if (cybersec == "true") {
    localStorage.setItem("augment-checkbox-63", "true");
    localStorage.setItem("augment-checkbox-12", "true");
    localStorage.setItem("augment-checkbox-19", "true");
    localStorage.setItem("augment-checkbox-20", "true");
    localStorage.setItem("augment-checkbox-60", "true");
    localStorage.setItem("augment-checkbox-92", "true");
  }

  if (netburners == "true") {
    localStorage.setItem("augment-checkbox-42", "true");
    localStorage.setItem("augment-checkbox-43", "true");
    localStorage.setItem("augment-checkbox-44", "true");
    localStorage.setItem("augment-checkbox-45", "true");
    localStorage.setItem("augment-checkbox-46", "true");
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (shadows_of_anarchy == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (tian_di_hui == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (bitrunners == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (nitesec == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (the_black_hand == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (aevum == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (chongqing == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (ishima == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (new_tokyo == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (sector_12 == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (volhaven == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (daedalus == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (illuminati == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (the_covenant == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (silhouette == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (slum_snakes == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (speakers_for_the_dead == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (tetrads == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (the_dark_army == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (the_syndicate == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (bachman_and_associates == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (blade_industries == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (clarke_incorporated == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (ecorp == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (four_sigma == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (fulcrum_secret_technologies == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (kuaigong_international == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (megacorp == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (nwo == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

  if (omnitek_incorporated == "true") {
    localStorage.setItem("augment-checkbox-60", "true");
  }

}
