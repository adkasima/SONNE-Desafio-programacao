let total = 0
let numberList = []

function sumPairValues(val) {
  const input = document.querySelector("input")
  const inputValue = Number(input.value)
  const span = document.querySelector("span")

  if (!inputValue) {
    alert("Número inválido.")
  } else {
    if (inputValue % 2 === 0) {
      total += inputValue
      span.innerText = total
    } else total = total
  }
}

//Método sem interface

// function sumPairValues(max) {
//   for (let i = 0; i <= max; i++) {
//     numberList.push(i)
//     if (numberList[i] % 2 === 0) {
//       total += numberList[i]
//     } else total = total
//   }
//   console.log(total)
//   return total
// }

// sumPairValues(50)
