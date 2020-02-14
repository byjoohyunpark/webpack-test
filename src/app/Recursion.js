/* recursion and stack */

let company = {
  // the same object, compressed for brevity
  tech: {
    sales: [
      { name: 'John', salary: 1000 },
      { name: 'Alice', salary: 1000 }
    ],
    development: {
      sites: [
        { name: 'Peter', salary: 1000 },
        { name: 'Alex', salary: 1000 }
      ],
      internals: {
        HR: [{ name: 'Jack', salary: 1000 }],
        creative: [{ name: 'Kay', salary: 1000 }]
      }
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

const createList = num => {
  let list = {}
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      list[i] = {
        value: num - i,
        next: null
      }
    } else {
      list[i] = {
        value: num - i,
        next: list[i - 1]
      }
    }
  }
  return list[num - 1]
}

let list = createList(4)

list = list.next

console.log(list)

export {}
