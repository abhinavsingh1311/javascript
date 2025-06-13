
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     // ul.innerHTML += '<li>New todo</li>';
//     const li = document.createElement('li');
//     li.textContent = 'new todo';
//     // ul.append(li);
//     ul.prepend(li);
// });


// // const items = document.querySelectorAll('li');

// items.forEach(i => {
//     i.addEventListener('click', (e) => {
//         //   console.log('item clicked');
//         //console.log(e.target);
//         //console.log(i);
//         //e.target.style.textDecoration = "line-through";
//         console.log("event in li");
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

// ul.addEventListener('click', e => {
//     //  console.log('event in ul');
//     console.log(e.target);
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI! my content is copy right');
// })

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', (e) => {
//     // console.log(e);
//     // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos- ${e.offsetX} y pos- ${e.offsetY}`
// })

// document.addEventListener('wheel', (e) => {
//     // console.log(e);
//     console.log(e.pageX, e.pageY);
// })