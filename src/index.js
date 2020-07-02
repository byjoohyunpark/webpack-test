// import './style/main.scss'
// import Paragraph from './app/Paragraph'

// function component() {
//   const element = document.createElement('div')
//   element.innerHTML = 'Hello webpack!'
//   return element
// }

// document.querySelector('#app').appendChild(component())

// document.querySelector('#app').appendChild(Paragraph)

import './style/main.scss'
import _ from 'lodash'

console.log(_.join(['index 1', 'module', 'loaded!'], ' '))

function message() {
  const element = document.createElement('div')
  element.innerHTML = 'index 1 loaded!'
  return element
}

document.querySelector('#app').appendChild(message())
