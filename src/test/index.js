import '../style/main.scss'
import './js/test'
import './js/test2'

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'
  return element
}

document.querySelector('#app').appendChild(component())
