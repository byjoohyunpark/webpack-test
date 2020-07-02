import './style/main.scss'
import Paragraph from './app/Paragraph'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack!'
  return element
}

document.querySelector('#app').appendChild(component())

document.querySelector('#app').appendChild(Paragraph)
