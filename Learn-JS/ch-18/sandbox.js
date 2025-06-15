//rest params
const double = (...nums) => {
    console.log(nums);
    return nums.map(nums => nums ** 2);
}

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

//spread syntax

const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', ...people];
console.log(members);


//for objects

const person = { name: 'shaun', age: 30, job: 'net-ninja' };
const personClone = { ...person, location: 'EDM' };
console.log(personClone);

//sets

const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
// const namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
// console.log(uniqueNames);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
console.log(ages);

//symbols

const symbolOne = Symbol();
const symbolTwo = Symbol();
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo);

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'ryu';
console.log(ninja);
