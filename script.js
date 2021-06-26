
const gamesOfInterest = [
    "Age of Empires IV",
    "The Anacrusis",
    "A Plague Tale: Requiem",
    "Atomic Heart",
    "Babylon's Fall",
    "Back 4 Blood",
    "Battlefield 2042",
    "Chernobylite",
    "Citizen Sleeper",
    "Contraband",
    "The Dark Pictures Anthology: House of Ashes",
    "Death Trash",
    "Diablo 2: Resurrected",
    "Elden Ring",
    "Elex 2",
    "ENDLESS Dungeon",
    "Evil Dead: The Game",
    "Far Cry 6",
    "Far Cry 6: Season Pass",
    "Final Fantasy Origin: Stranger of Paradise",
    "Final Fantasy Pixel Remaster",
    "Forza Horizon 5",
    "Gloomwood",
    "Halo Infinite Multiplayer",
    "Icarus",
    "Immortality",
    "Ixion",
    "Jurassic World Evolution 2",
    "Lego Builder's Journey",
    "Lemnis Gate",
    "Life is Strange: True Colors",
    "Loot River",
    "Lost Ark",
    "Marvel's Guardian's of the Galaxy",
    "Metal Slug Tactics",
    "Mechajammer",
    "Microsoft Flight Simulator DLC",
    "Monster Hunter Stories 2: Wings of Ruin",
    "Orcs Must Die 3",
    "The Outer Worlds 2",
    "Pioner",
    "Psychonauts 2",
    "Rainbow Six Extraction",
    "Redfall",
    "Red Solstice 2: Survivors",
    "Replaced",
    "Riders Republic",
    "Rocksmtih+",
    "Salf and Sacrifice",
    "Sea of Thieves: A Pirate's Life",
    "Shredders",
    "Sifu",
    "Silt",
    "Slime Rancher 2",
    "Solar Ash",
    "Somerville",
    "Song of Congquest",
    "Stalker 2: heart if Chernobyl",
    "Starfield",
    "Tales of Arise",
    "They Always Run",
    "Tiny Tina's Wonderlands",
    "Two Pint Campus",
    "Vampire: The Masquerade",
    "Watch Dogs: Legion - Bloodline",
    "Warhammer 40,000: Chaos Gate - Daemonhunters",
    "WarTales"
]

function helloWorld() {
    console.log("Hello World");
}

function populateDropdown(listOfOptions, targetElementId) {

    console.log(`Started Populating Dropdown ${targetElementId}`);
    const dropdown = document.getElementById(targetElementId);

    for(i = 0; i < listOfOptions.length; i++) {
        const opt = document.createElement("option");
        opt.innerText = listOfOptions[i];
        opt.setAttribute("value", `${listOfOptions[i]}`);
        dropdown.appendChild(opt);

        console.log(`Option ${listOfOptions[i]} appended to ${targetElementId}`);
    }

    console.log(`Finished Populating Dropdown ${targetElementId}`);
}

function populateCheckboxList(listOfOptions, targetElementId) {

    console.log(`Started Populating Checkbox List ${targetElementId}`);
    const checkboxList = document.getElementById(targetElementId);

    for(i = 0; i < listOfOptions.length; i++) {
        createCheckboxFormGroup(listOfOptions[i], targetElementId);
    }

    console.log(`Finished Populating Checkbox List ${targetElementId}`);
}

function createCheckboxFormGroup(checkboxValue, parentElementId) {

    const parent = document.getElementById(parentElementId);
    const div = document.createElement("div");
    div.classList.add("form-group-checkbox");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("for", `${checkboxValue}-checkbox`);
    checkbox.setAttribute("name", `${checkboxValue}-checkbox`);
    checkbox.setAttribute("id", `${checkboxValue}-checkbox`);
    checkbox.setAttribute("value", checkboxValue);

    const label = document.createElement("label");
    label.setAttribute("for", `${checkboxValue}-checkbox`);
    label.setAttribute("id", `${checkboxValue}-label`);
    label.innerText = checkboxValue;

    div.appendChild(checkbox);
    div.appendChild(label);
    parent.appendChild(div);

    console.log(`Appended form-group-checkbox div content to ${parentElementId}`);
}