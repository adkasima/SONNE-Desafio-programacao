let total = 0

function sumPairValues(val) {
  const inputValue = Number(document.querySelector("input").value)
  const span = document.querySelector("span")

  if (!inputValue || typeof inputValue != "number") {
    alert("Número inválido.")
  } else {
    if (inputValue % 2 === 0) {
      total += Number(inputValue)
      span.innerText = total
    } else total = total
  }
}

//Método sem interface

// let numberList = []
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
