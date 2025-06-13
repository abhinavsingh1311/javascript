const form = document.querySelector('.signup-form');
//const input = document.querySelector('#name');
const userNamePattern = /^[a-zA-Z]{6,12}^/;
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(input.value);
    console.log(form.name.value);
});

//validation

const username = form.name.value;


let result = userNamePattern.test(username);
console.log(result);

if (result) {
    //console.log('regex test passed');
    feedback.textContent = 'username is valid';
} else {
    feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    //console.log('regex test failed');
}

// live feedback

form.name.addEventListener('keyup', e => {
    // console.log(e.target.value);
    if (userNamePattern.test(e.target.value)) {
        form.name.setAttribute('class', 'success');
        //console.log('passed');
    }
    else {
        form.name.setAttribute('class', 'error');
        //console.log('failed');
    }
})
