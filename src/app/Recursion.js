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

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

list = list.next

console.log(list)

export {}
