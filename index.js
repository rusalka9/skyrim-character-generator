const raceArray = ["High Elf", "Dark Elf", "Wood Elf", "Orc", "Khajiit", "Argonian", "Nord", "Breton", "Imperial", "Redguard"];
const stoneArray = ["Mage", "Thief", "Warrior", "Lady", "Lover", "Lord", "Shadow", "Tower", "Ritual", "Serpent", "Apprentice", "Atronach", "Steed"];
const factionArray = ["Companions", "College of Winterhold", "Dark Brotherhood", "Thieves' Guild", "Stormcloaks", "Dawnguard", "Volkihar Vampires"];
const skillsArray = ["Alchemy", "Alteration", "Archery", "Block", "Conjuration", "Destruction", "Enchanting", "Heavy Armor", "Illusion", "Light Armor", "Lockpicking", "One-Handed", "Pickpocket", "Restoration", "Smithing", "Sneak", "Speech", "Two-Handed"];

const pickRandom = (array, num = 1) => {
    const result = [];
    for(let i = 0; i < num;) {
        const random = Math.floor(Math.random() * array.length);
        if(result.indexOf(array[random]) !== -1) {
            continue;
        };
        result.push(array[random]);
        i++;
    };
    return result;
};

const raceText = document.querySelector("#raceText");
const stoneText = document.querySelector("#stoneText");
const factionText = document.querySelector("#factionText");
const skillText1 = document.querySelector("#skillText1");
const skillText2 = document.querySelector("#skillText2");
const skillText3 = document.querySelector("#skillText3");
const skillText4 = document.querySelector("#skillText4");
const skillText5 = document.querySelector("#skillText5");

raceText.textContent = "x";
stoneText.textContent = "x";
factionText.textContent = "x";
skillText1.textContent = "x";
skillText2.textContent = "x";
skillText3.textContent = "x";
skillText4.textContent = "x";
skillText5.textContent = "x";

const generateCharacter = () => {
    let raceResult = pickRandom(raceArray, 1);
    let stoneResult = pickRandom(stoneArray, 1);
    let factionResult = pickRandom(factionArray, 1);
    let skillsResult = pickRandom(skillsArray, 5);

    raceText.textContent = raceResult[0];
    stoneText.textContent = stoneResult[0];
    factionText.textContent = factionResult[0];
    skillText1.textContent = skillsResult[0];
    skillText2.textContent = skillsResult[1];
    skillText3.textContent = skillsResult[2];
    skillText4.textContent = skillsResult[3];
    skillText5.textContent = skillsResult[4];
};

const newCharacterBtn = document.querySelector("#newCharacterBtn");
newCharacterBtn.addEventListener("click", generateCharacter);