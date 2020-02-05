import _ from 'lodash'
import { One } from './app/One'
import { Two } from './app/Two'
import './style/main.scss'

function component() {
  const element = document.createElement('div')
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  return element
}

document.querySelector('#app').appendChild(component())

console.log('init index.js')

document.querySelector('#app').appendChild(One)
document.querySelector('#app').appendChild(Two)

let company = {
  // the same object, compressed for brevity
  tech: {
    sales: [
      { name: 'John', salary: 1000 },
      { name: 'Alice', salary: 600 }
    ],
    development: {
      sites: [
        { name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }
      ],
      internals: [{ name: 'Jack', salary: 1300 }]
    }
  }
}

const compute_salary = target => {
  if (Array.isArray(target)) {
    return target.reduce(
      (accumulator, current) => accumulator + current.salary,
      0
    )
  } else {
    let sum = 0
    for (let department of Object.values(target)) {
      sum += compute_salary(department)
    }
    return sum
  }
}

console.log(compute_salary(company))
