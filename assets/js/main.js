window.onload = () => {
    highlightFactionChecklist();
}

window.onchange = () => {
    saveFactionChecklist();
    highlightFactionChecklist();
}

// Faction Checklist
let factionCheckboxes = document.querySelectorAll('.faction-checkbox').length;
function saveFactionChecklist() {
    for (let i = 1; i <= factionCheckboxes; i++) {
        let x = 'faction-' + String(i);
        let checkbox = document.getElementById(x);
        localStorage.setItem("faction-checkbox-" + String(i), checkbox.checked);
    }
}
for (let i = 1; i <= factionCheckboxes; i++) {
    if (localStorage.length > 0) {
        let x = 'faction-' + String(i);
        let checked = JSON.parse(localStorage.getItem("faction-checkbox-" + String(i)));
        document.getElementById(x).checked = checked;
    }
}

function highlightFactionChecklist() {
    for (let i = 1; i <= factionCheckboxes; i++) {
        if (localStorage.length > 0) {
            let checkbox = 'faction-checkbox-' + String(i);
            let card = 'faction-card-' + String(i);
            let data = `${localStorage.getItem(checkbox)}`
            if (data == 'true') {
                document.querySelector('#' + card).style.backgroundColor = "yellow";
            } else {
                document.querySelector('#' + card).style.backgroundColor = "inherit";
            }
        }
    }
}

// Filter Faction Cards
$("#faction-cards-filter").keyup(function () {
    let filter = $(this).val(), count = 0;
    $('#filterable-faction-card div').each(function () {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show();
            count++;
        }
    });
});

// Clear Faction Checklists
function clearFactionChecklist() {
    if (confirm("Are you sure you want to delete checklist data?") == true) {
        for (let i = 1; i <= factionCheckboxes; i++) {
            let x = 'faction-' + String(i);
            let checkbox = document.getElementById(x);
            checkbox.checked = false;
            saveFactionChecklist();
            highlightFactionChecklist();
        }
    }
}

//Prevent links from being dragged
$('a').mousedown(function (e) {
    e.preventDefault();
});