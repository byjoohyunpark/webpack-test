import _ from 'lodash'

const Paragraph = document.createElement('p')
Paragraph.innerHTML = 'Paragraph 2'

console.log(_.join(['paragraph 2', 'module', 'loaded!'], ' '))

export default Paragraph
