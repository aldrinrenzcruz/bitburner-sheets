let factionCheckboxes = document.querySelectorAll('.faction-checkbox').length;

function saveFactionChecklist() {
    for (let i = 1; i <= factionCheckboxes; i++) {
        let x = 'faction-' + String(i);
        let checkbox = document.getElementById(x);
        localStorage.setItem("faction-checkbox" + String(i), checkbox.checked);
    }
}

for (let i = 1; i <= factionCheckboxes; i++) {
    if (localStorage.length > 0) {
        let x = 'faction-' + String(i);
        let checked = JSON.parse(localStorage.getItem("faction-checkbox" + String(i)));
        document.getElementById(x).checked = checked;
    }
}

window.addEventListener('change', saveFactionChecklist);