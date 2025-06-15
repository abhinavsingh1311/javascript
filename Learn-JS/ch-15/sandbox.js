// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login() {
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout() {
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore() {
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// };

// class Admin extends User {
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.username !== user.username;
//         });
//     }
// }

function User(username, email) {
    this.username = username;
    this.email = email;
};

const userOne = new User('mario', 'abhi1@gmail.com');
const userTwo = new User('luigi', 'abhi2@gmail.com');
const userThree = new User('yoshi', 'abhi3@gmail.com', "admin");