const personList = [
  { name: "João", age: 19 },
  { name: "Rian", age: 17 },
  { name: "Maria", age: 18 },
]

function addIsAdultProperty(list) {
  const updatedPersonList = list.map((person) => ({
    name: person.name,
    age: person.age,
    isAdult: person.age >= 18 ? true : false,
  }))
  return updatedPersonList
}

const updatedPersonList = addIsAdultProperty(personList)
console.log(updatedPersonList)
