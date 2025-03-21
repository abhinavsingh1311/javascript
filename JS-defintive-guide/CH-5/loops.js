//for/of with strings

let frequency = {};
for (let letter of 'mississippi') {
    if (frequency[letter]) {
        frequency[letter]++;
    }
    else {
        frequency[letter] = 1;
    }
}
frequency;


//for/of with set and map

let text = "NA na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet) {
    unique.push(word);
}
unique

//map

let m = new Map([[1, "one"]]);
for (let [key, value] of m) {
    key
    value
}