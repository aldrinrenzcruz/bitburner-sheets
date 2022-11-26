const allFactionsChecklist = {
  'list': [
    {
      'faction': 'CyberSec',
      'checklistID': '1',
    },
    {
      'faction': 'Netburners',
      'checklistID': '2',
    },
    {
      'faction': 'Tian Di Hui',
      'checklistID': '3',
    },
    {
      'faction': 'Shadows of Anarchy',
      'checklistID': '4',
    },
    {
      'faction': 'NiteSec',
      'checklistID': '17',
    },
    {
      'faction': 'The Black Hand',
      'checklistID': '18',
    },
    {
      'faction': 'Bitrunners',
      'checklistID': '19',
    },
    {
      'faction': 'Sector-12',
      'checklistID': '5',
    },
    {
      'faction': 'Aevum',
      'checklistID': '6',
    },
    {
      'faction': 'Volhaven',
      'checklistID': '7',
    },
    {
      'faction': 'Chongqing',
      'checklistID': '8',
    },
    {
      'faction': 'New Tokyo',
      'checklistID': '9',
    },
    {
      'faction': 'Ishima',
      'checklistID': '10',
    },
    {
      'faction': 'Slum Snakes',
      'checklistID': '11',
    },
    {
      'faction': 'Tetrads',
      'checklistID': '12',
    },
    {
      'faction': 'Silhouette',
      'checklistID': '13',
    },
    {
      'faction': 'Speakers for the Dead',
      'checklistID': '14',
    },
    {
      'faction': 'The Dark Army',
      'checklistID': '15',
    },
    {
      'faction': 'The Syndicate',
      'checklistID': '16',
    },

    {
      'faction': 'ECorp',
      'checklistID': '20',
    },
    {
      'faction': 'MegaCorp',
      'checklistID': '21',
    },
    {
      'faction': 'KuaiGong International',
      'checklistID': '22',
    },
    {
      'faction': 'Four Sigma',
      'checklistID': '23',
    },
    {
      'faction': 'NWO',
      'checklistID': '24',
    },
    {
      'faction': 'Blade Industries',
      'checklistID': '25',
    },
    {
      'faction': 'OmniTek Incorporated',
      'checklistID': '26',
    },
    {
      'faction': 'Bachman & Associates',
      'checklistID': '27',
    },
    {
      'faction': 'Clarke Incorporated',
      'checklistID': '28',
    },
    {
      'faction': 'Fulcrum Secret Technologies',
      'checklistID': '29',
    },
    {
      'faction': 'Daedalus',
      'checklistID': '30',
    },
    {
      'faction': 'The Covenant',
      'checklistID': '31',
    },
    {
      'faction': 'Illuminati',
      'checklistID': '32',
    },

  ]
};
const factionChecklistTemplate = ({
  faction,
  checklistID,
}) => `

<li class="list-group-item">
<input class="form-check-input me-1 faction-checkbox" type="checkbox" value="" id="${checklistID}">
<label class="form-check-label" for="${checklistID}">${faction}</label>
</li>
`;

const factionChecklist = allFactionsChecklist.list.map(factionChecklistTemplate);

document.querySelector('#all-factions-checklist').innerHTML = `<ul class="list-group rounded-0">${factionChecklist.join("")}</ul>`