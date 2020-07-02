import _ from 'lodash'

const Paragraph = document.createElement('p')
Paragraph.innerHTML = 'Paragraph 1'

console.log(_.join(['paragraph 1', 'module', 'loaded!'], ' '))

export default Paragraph
