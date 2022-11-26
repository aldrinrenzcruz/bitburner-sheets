const allAugments = {
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
    },
  ]
};
const augmentsListTemplate = ({
  faction,
  type,
  requirements,
  augmentations,
  prevents,
  work,
  description,
}) => `
<div class="card rounded-0 mt-3 shadow">
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

const augmentsTable = allAugments.list.map(augmentsListTemplate);

document.querySelector('#all-augments-data').innerHTML = augmentsTable.join("");