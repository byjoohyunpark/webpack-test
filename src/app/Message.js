function component() {
  const element = document.createElement('div')
  element.innerHTML = 'Hello webpack!'
  return element
}

console.log('message loaded!')

document.querySelector('#app').appendChild(component())
