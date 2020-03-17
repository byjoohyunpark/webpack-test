import _ from 'lodash'

console.log(_.join(['test 1', 'module', 'loaded!'], ' '))

function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack'
  return element
}

document.querySelector('#app').appendChild(component())
