// let's sum some numbers with TDD
function sum(...numbers) {
  return numbers.reduce((acc, n) => n + acc, 0)
}

export default sum
