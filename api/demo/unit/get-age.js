export default getAge

function getAge(person) {
  if (typeof person.age !== 'undefined') {
    return person.age
  }
  return null
}

