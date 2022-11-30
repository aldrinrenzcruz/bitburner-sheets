/** @param {NS} ns */
export async function main(ns) {

	const allFactions = {
		list: [
			{
				faction: 'CyberSec',
				type: 'Early Game Faction',
				requirements: 'Install a backdoor on the CSEC server',
				augmentations: 'NeuroFlux Governor, Neurotrainer I, Synaptic Enhancement Implant, BitWire, Cranial Signal Processors - Gen I, Cranial Signal Processors - Gen II',
				work: 'Hacking Contracts',
				description: 'The Internet is the first thing that was built that we don\'t fully understand, the largest experiment in anarchy that we have ever had. And as the world becomes increasingly dominated by it, society approaches the brink of total chaos. We serve only to protect society, to protect humanity, to protect the world from imminent collapse.',
				checklistID: 'faction-1',
			},
			{
				faction: 'Netburners',
				type: 'Early Game Faction',
				requirements: 'Hacking Level 80, Total Hacknet Levels of 100, Total Hacknet RAM of 8, Total Hacknet Cores of 4',
				augmentations: 'NeuroFlux Governor, Hacknet Node NIC Architecture Neural-Upload, Hacknet Node Cache Architecture Neural-Upload, Hacknet Node CPU Architecture Neural-Upload, Hacknet Node Kernel Direct-Neural Interface, Hacknet Node Core Direct-Neural Interface',
				work: 'Hacking Contracts',
				description: '~~//*>H4CK||3T 8URN3R5**>?>\~~',
				checklistID: 'faction-2',
			},
		]
	};

	// ns.tprint(allFactions.list[0].type);

	// for (const faction of allFactions.list) {
	// 	ns.tprint(faction);
	// }

	// for (const faction of allFactions.list) {
	// 	if (faction.faction === "CyberSec") {
	// 		ns.tprint(faction.faction);
	// 		ns.tprint(faction.work);
	// 	}
	// }


	// for (const item of allFactions.list) {
	// 	ns.tprint(item.faction);
	// 	ns.tprint(item.type);
	// 	ns.tprint(item.work);
	// 	ns.tprint('-----------------------------------');
	// }

}


// -------------------------------------------------------------- 

// Alternative structure

const allFactions = {

	'CyberSec': {
		'type': 'Early Game Faction',
		'requirements': 'Install a backdoor on the CSEC server',
		'augmentations': 'NeuroFlux Governor, Neurotrainer I, Synaptic Enhancement Implant, BitWire, Cranial Signal Processors - Gen I, Cranial Signal Processors - Gen II',
		'work': 'Hacking Contracts',
		'description': 'The Internet is the first thing that was built that we don\'t fully understand, the largest experiment in anarchy that we have ever had. And as the world becomes increasingly dominated by it, society approaches the brink of total chaos. We serve only to protect society, to protect humanity, to protect the world from imminent collapse.',
		'checklistID': 'faction-1'
	}
	,

	'Netburners': {
		'type': 'Early Game Faction',
		'requirements': 'Hacking Level 80, Total Hacknet Levels of 100, Total Hacknet RAM of 8, Total Hacknet Cores of 4',
		'augmentations': 'NeuroFlux Governor, Hacknet Node NIC Architecture Neural-Upload, Hacknet Node Cache Architecture Neural-Upload, Hacknet Node CPU Architecture Neural-Upload, Hacknet Node Kernel Direct-Neural Interface, Hacknet Node Core Direct-Neural Interface',
		'work': 'Hacking Contracts',
		'description': '~~//*>H4CK||3T 8URN3R5**>?>\~~',
		'checklistID': 'faction-2'
	}
};

ns.tprint(allFactions.CyberSec.type)

ns.tprint(findShit("Early"));
ns.tprint("-");
ns.tprint(findShit("neuRotrAiner"));
ns.tprint("-");
let shit = findShit("neuroflux");
shit.forEach(e => ns.tprint(e[0]));

function findShit(value, factions = allFactions) {
	value = value.toLowerCase();
	let toReturn = [];
	for (const fact of Object.keys(factions)) {
		Object.keys(factions[fact]).forEach(key => {
			if (factions[fact][key].toLowerCase().includes(value))
				toReturn.push([fact, key]);
		});
	}
	return toReturn;
}