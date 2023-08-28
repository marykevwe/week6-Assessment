function countChars(inputString) {
    const countA = (inputString.match(/a/g) || []).length;
    const countB = (inputString.match(/b/g) || []).length;
    const countD = (inputString.match(/d/g) || []).length;
    const countY = (inputString.match(/y/g) || []).length;

    return [countA, countB, countD, countY];
}


const inputString = "abdsgyhidsaadgbdaasbvcydsaabdgsaayre";
const counts = countChars(inputString);
console.log("Count of 'a':", counts[0]);
console.log("Count of 'b':", counts[1]);
console.log("Count of 'd':", counts[2]);
console.log("Count of 'y':", counts[3]);


function separateItems(itemString) {
    const edibleItems = [];
    const nonEdibleItems = [];

    const items = itemString.split(', ');

    for (const item of items) {
        // Check if the item is edible
        if (["rice", "yam", "beans", "cocoyam", "banana", "semo", "milk"].includes(item)) {
            edibleItems.push(item);
        } else {
            nonEdibleItems.push(item);
        }
    }

    return [edibleItems.join(', '), nonEdibleItems.join(', ')];
}

const itemString = "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair";
const [edible, nonEdible] = separateItems(itemString);
console.log("Edible items:", edible);
console.log("Non-edible items:", nonEdible);
