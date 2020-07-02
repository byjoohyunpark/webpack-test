// import './style/main.scss'
// import Paragraph2 from './app/Paragraph2'

// function component() {
//   const element = document.createElement('div')
//   element.innerHTML = 'Hello webpack!'
//   return element
// }

// document.querySelector('#app').appendChild(component())

// document.querySelector('#app').appendChild(Paragraph2)

import './style/main.scss'
import _ from 'lodash'

console.log(_.join(['index 2', 'module', 'loaded!'], ' '))

function message() {
  const element = document.createElement('div')
  element.innerHTML = 'index 2 loaded!'
  return element
}

document.querySelector('#app').appendChild(message())