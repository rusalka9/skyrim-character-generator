let raceResult = "";
let stoneResult = "";
let factionResult = "";
let skillsResult = [];

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