import _ from 'lodash'

const Paragraph = document.createElement('p')
Paragraph.innerHTML = 'Paragraph 1'

document.querySelector('#app').appendChild(Paragraph)

console.log(_.join(['paragraph 1', 'module', 'loaded!'], ' '))
