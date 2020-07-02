import '../style/main.scss'
import './js/test'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'
  return element
}

document.querySelector('#app').appendChild(component())
