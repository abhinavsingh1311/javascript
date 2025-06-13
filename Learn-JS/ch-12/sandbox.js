// const request = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/todos";

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText)
//     }
// })
// request.open('GET', url);
// request.send();

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'todos.json');
//     request.send();
// };
// console.log('before');
// console.log('after');

// getTodos((error, data) => {
//     console.log('callback fired');
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// console.log('before1');
// console.log('after2');

// // promise

// const getSomething = () => {
//     return new Promise((res, rej) => {
//         //fetch something
//         res('something');
//         rej('something else');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// },
//     (error) => {
//         console.log(error);

//     }
// );


const getTodos = (resource, callback) => {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                res(data);
            } else if (request.readyState === 4) {
                rej('could not fetch data');
            }
        });
        request.open('GET', url);
        request.send();
    });
};

getTodos().then((data) => console.log('Promised Resolved', data)).catch(error => console.log(error));
//getSomething().then(data => console.log(data)).catch(error => console.log(error));