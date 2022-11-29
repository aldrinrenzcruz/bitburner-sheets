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
            let bg = (data == 'true') ? "#ffffa3" : "inherit";
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
            let bg = (data == 'true') ? "#ffffa3" : "inherit";
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

// Pretend you have read each value from an object.
// const a = "true";
// const b = "true";
// const f = "false";
// const g = "true";
// const n = "true";
// Get the boolean value of each "boolean" string.
// The same as converting boolean string to actual boolean value.
// The .toLowerCase() is there to ensure that each boolean string
// is OK to be compared.  For example, this is not what you want:
// "True" === "true";
// This is what you want (after conversion to lowercase):
// "true" === true;
// const A = a.toLowerCase() === "true";
// const B = b.toLowerCase() === "true";
// const F = f.toLowerCase() === "true";
// const G = g.toLowerCase() === "true";
// const N = n.toLowerCase() === "true";
// const result = A && B && F && G && N;
// const more_result = result ? "#ffff70" : "inherit";
// document.querySelector('#faction-card-1').style.backgroundColor = more_result;
// console.log(more_result);

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

//Prevent links from being dragged
$('a').mousedown(function (e) {
    e.preventDefault();
});