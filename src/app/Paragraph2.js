import _ from 'lodash'

const Paragraph = document.createElement('p')
Paragraph.innerHTML = 'Paragraph 2'

document.querySelector('#app').appendChild(Paragraph)

console.log(_.join(['paragraph 2', 'module', 'loaded!'], ' '))
