const personList = [
  { name: "João", age: 25 },
  { name: "Maria", age: 18 },
  { name: "Rian", age: 16 },
  { name: "Olívia", age: 14 },
]

function addIsAdultProperty(list) {
  const updatedPersonList = list.map((person) => ({
    name: person.name,
    isAdult: person.age >= 18 ? true : false,
  }))
  return updatedPersonList
}

const updatedPersonList = addIsAdultProperty(personList)
console.log(updatedPersonList)
