// // // // // // //functions

// // // // // // function greet() {
// // // // // //     console.log('hello there!');
// // // // // // }

// // // // // // const speak = function () {
// // // // // //     console.log('good day!');
// // // // // // };

// // // // // // greet();
// // // // // // speak();

// // // // // const speak = function (name, time) {
// // // // //     console.log(`good ${time},  ${name}!`);
// // // // // };

// // // // // speak('mario', 'morning');

// // // // const calcArea = function (radius) {
// // // //     return 3.14 * Math.pow(radius, 2);
// // // // }
// // // // const area = calcArea(5);
// // // // console.log(calcArea(5));

// // // // const calcVol = function (area) {
// // // //     return area * 4;
// // // // }
// // // // const volume = calcVol(area);
// // // // console.log(volume);

// // // //arrow function

// // // // const calArea = (radius) => {
// // // //     return 3.14 * Math.pow(radius, 2);
// // // // }

// // // // const area = calArea(5);
// // // // console.log('area is:', area);

// // // // DOM

// // // const para = document.querySelector('p');
// // // //console.log(para);

// // // const paras = document.querySelectorAll('p');

// // // // paras.forEach(para => {
// // // //     console.log(para.innerText);
// // // //     para.innerText += 'new tEXT';
// // // // });


// // // const content = document.querySelector('.content');



// // // // content.innerHTML += '<h>this is a new h2 <h2>';

// // // // console.log(content.innerHTML);

// // // const people = ['mario', 'luigi', 'yoshi'];

// // // people.forEach(person => {
// // //     content.innerHTML = `<p>${person}</p>`;
// // // });

// // const link = document.querySelector('a');

// // console.log(link.getAttribute('href'));
// // link.setAttribute('href', 'https://www.thenetninja.co.uk');
// // link.innerText = 'The Net Ninja Website';


// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para.innerText)
// // });

// paras.forEach(p => {
//     if (p.textContent.includes('error')) {
//         p.classList.add('error');
//     }
//     if (p.textContent.includes('success')) {
//         p.classList.add('success');
//     }
// })

// const title = document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');

const article = document.querySelector('article');

// console.log(article.children);

// Array.from(article.children).forEach(p => {
//     p.classList.add('article-element');
// })

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


//chaining

console.log(title.nextElementSibling.parentElement.children);
