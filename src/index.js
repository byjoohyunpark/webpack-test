import _ from 'lodash';
import { One } from './app/One';
import { Two } from './app/Two';
import './style/main.scss';

function component() {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.querySelector('#app').appendChild(component());

console.log('init index.js');

document.querySelector('#app').appendChild(One);
document.querySelector('#app').appendChild(Two);
