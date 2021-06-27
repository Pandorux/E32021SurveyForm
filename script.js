
const gamesOfInterest = [
    "Age of Empires IV",
    "A Plague Tale: Requiem",
    "Atomic Heart",
    "Battlefield 2042",
    "Diablo 2: Resurrected",
    "Elden Ring",
    "ENDLESS Dungeon",
    "Far Cry 6",
    "Far Cry 6: Season Pass",
    "Final Fantasy Pixel Remaster",
    "Halo Infinite Multiplayer",
    "Life is Strange: True Colors",
    "Loot River",
    "Metal Slug Tactics",
    "The Outer Worlds 2",
    "Replaced",
    "Sea of Thieves: A Pirate's Life",
    "Sifu",
    "Slime Rancher 2",
    "Solar Ash",
    "Stalker 2: heart if Chernobyl",
    "Starfield",
    "Tales of Arise",
    "Two Pint Campus",
    "WarTales",
    "Other"
]

const backgroundImages = [
    backgroundImage = {
        image: "images/bg-elden-ring.jpg",
        horizontalPos: "center",
        verticalPos: "center"
    },
    backgroundImage = {
        image: "images/bg-far-cry.jpg",
        horizontalPos: "center",
        verticalPos: "center"
    },
    backgroundImage = {
        image: "images/bg-life-is-strange.jpg",
        horizontalPos: "right",
        verticalPos: "center"
    },
    backgroundImage = {
        image: "images/bg-slime-rancher.jpg",
        horizontalPos: "left",
        verticalPos: "center"
    },
    backgroundImage = {
        image: "images/bg-solar-ash.jpg",
        horizontalPos: "right",
        verticalPos: "bottom"
    }
]

// Is this a JS Lambda? I think so
const random = (min = 0, max = 50) => {
    let num = Math.random() * (max - min) + min;

    return Math.round(num);
};

function setRandomBackground() {

    backgroundImages.forEach(backgroundImage => console.log(backgroundImage.image));

    const body = document.body;
    const bgIndex = random(0, backgroundImages.length - 1);

    body.style.backgroundImage = `url('${backgroundImages[bgIndex].image}')`;
    body.style.backgroundPosition = `${backgroundImages[bgIndex].horizontalPos} ${backgroundImages[bgIndex].verticalPos}`;
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