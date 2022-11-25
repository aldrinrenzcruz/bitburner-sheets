const allQuickLinks = {
  'list': [
    { 'faction': 'CyberSec', 'type': 'Early Game Faction', 'requirements': 'Install a backdoor on the CSEC server', 'augmentations': 'NeuroFlux Governor Neurotrainer I Synaptic Enhancement Implant BitWire Cranial Signal Processors - Gen I Cranial Signal Processors - Gen II', 'prevents': '-', 'work': 'Hacking', 'description': 'The Internet is the first thing that was built that we don\'t fully understand, the largest experiment in anarchy that we have ever had.And as the world becomes increasingly dominated by it, society approaches the brink of total chaos.We serve only to protect society, to protect humanity, to protect the world from imminent collapse.', },
  ]
};
const allQuickLinksTemplate = ({
  faction,
  type,
  requirements,
  augmentations,
  prevents,
  work,
  description,
}) => `
<div class="card link-container link-filterable">
  <img class="link-img" src="${requirements}" />
  <a class="link-type stretched-link" href="${augmentations}" ${work} description="simulateClickonMenuCloseBtn(); ${description}" type="${type}">${faction} <span class="h-0">${prevents}, ${type}, ${augmentations}</span></a>
</div>
`;
const generateAllQuickLinks = allQuickLinks.list.map(allQuickLinksTemplate);
document.getElementById("table-1-data").innerHTML = generateAllQuickLinks.join("")