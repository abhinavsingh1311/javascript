import { styleBody, addTitle, contact } from './dom';
import test, { getPremium } from './data';

console.log('index file');

addTitle('title');
styleBody();
console.log(contact);
const premUsers = getPremium(test);
console.log(premUsers);