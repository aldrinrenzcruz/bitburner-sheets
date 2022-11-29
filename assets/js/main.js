window.onload = () => {
    loadAugmentChecklist();
    highlightAugmentChecklist();
    highlightFactionChecklist();
    masterHighlighter();
}

window.onchange = () => {
    masterHighlighter();
    highlightAugmentChecklist();
    highlightFactionChecklist();
    loadAugmentChecklist();
}

// Save Faction checkbox data to localStorage
function saveFactionChecklist(n) {
    localStorage.setItem("faction-checkbox-" + n, document.querySelector("#faction-" + n).checked);
}

// Load Faction checkbox data from localStorage
for (let i = 1; i <= document.querySelectorAll('.faction-checkbox').length; i++) {
    if (localStorage.length > 0) {
        let x = 'faction-' + String(i);
        let checked = JSON.parse(localStorage.getItem("faction-checkbox-" + String(i)));
        document.getElementById(x).checked = checked;
    }
}

// Faction Highlighter
function highlightFactionChecklist() {
    for (let i = 1; i <= document.querySelectorAll('.faction-checkbox').length; i++) {
        if (localStorage.length > 0) {
            let checkbox = 'faction-checkbox-' + String(i);
            let card = 'faction-card-' + String(i);
            let data = `${localStorage.getItem(checkbox)}`
            let bg = (data == 'true') ? "#ffff92" : "inherit";
            document.querySelector('#' + card).style.backgroundColor = bg;
            // if (data == 'true') {
            //     document.querySelector('#' + card).style.backgroundColor = "yellow";
            // } else {
            //     document.querySelector('#' + card).style.backgroundColor = "inherit";
            // }
        }
    }
}

// Save Augment checkbox data to localStorage
function saveAugmentChecklist(n) {
    localStorage.setItem("augment-checkbox-" + n, document.querySelector("#augment-" + n).checked);
}

// Load Augment checkbox data from localStorage
function loadAugmentChecklist() {
    for (let i = 1; i <= document.querySelectorAll('.augment-checkbox').length; i++) {
        if (localStorage.length > 0) {
            let x = 'augment-' + String(i);
            let checked = JSON.parse(localStorage.getItem("augment-checkbox-" + String(i)));
            document.getElementById(x).checked = checked;
        }
    }
}

// Augment Highlighter
function highlightAugmentChecklist() {
    for (let i = 1; i <= document.querySelectorAll('.augment-checkbox').length; i++) {
        if (localStorage.length > 0) {
            let checkbox = 'augment-checkbox-' + String(i);
            let card = 'augment-card-' + String(i);
            let data = `${localStorage.getItem(checkbox)}`
            let bg = (data == 'true') ? "#ffff92" : "inherit";
            document.querySelector('#' + card).style.backgroundColor = bg;
            // if (data == 'true') {
            //     document.querySelector('#' + card).style.backgroundColor = "yellow";
            // } else {
            //     document.querySelector('#' + card).style.backgroundColor = "inherit";
            // }
        }
    }
}

// Clear Faction Checklists
function clearFactionChecklist() {
    if (confirm("Are you sure you want to delete checklist data?") == true) {
        localStorage.clear();
        location.reload();
        // TODO: Make a batter Clear function
    }
}

// Filter Faction Cards
$("#faction-cards-filter").keyup(function () {
    let filter = $(this).val(), count = 0;
    $('#filterable-faction-card tr').each(function () {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show();
            count++;
        }
    });
});

// Filter Augment Cards
$("#augment-cards-filter").keyup(function () {
    let filter = $(this).val(), count = 0;
    $('#filterable-augment-card tr').each(function () {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show();
            count++;
        }
    });
});

//Prevent links from being dragged
$('a').mousedown(function (e) {
    e.preventDefault();
});