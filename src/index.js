import './style/main.scss'
import './app/Recursion'
import { Two } from './app/Two'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'
  return element
}

document.querySelector('#app').appendChild(component())

document.querySelector('#app').appendChild(Two)
