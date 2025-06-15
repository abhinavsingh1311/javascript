const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
    let html = `
    <li data-id="${id}">
     <div>${recipe.title}</div>
     <div>${recipe.created_at.toDate()}</div> 
     <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    //  console.log(html);
    list.innerHTML += html;
};



//get documents
const unsub = db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        if (change.type == 'added') {
            addRecipe(doc.data(), doc.id);
        } else if (change.type == 'removed') {
            const li = list.querySelector(`[data-id="${doc.id}"]`);
            list.removeChild(li);
        }
    });
});

unsub();
// add document
form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
        author: "Abhinav"
    };

    // console.log(recipe);
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch((err) => {
        console.log(err);
    });

});

//delete document
list.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        }).catch((err) => {
            console.log(err);
        });
    }
});

button.addEventListener('click', e => {
    unsub();
    console.log('unsubscribe');
});