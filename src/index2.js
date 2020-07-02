import './style/main.scss'
import Paragraph2 from './app/Paragraph2'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack!'
  return element
}

document.querySelector('#app').appendChild(component())

document.querySelector('#app').appendChild(Paragraph2)
