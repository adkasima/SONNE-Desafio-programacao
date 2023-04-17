function fizzBuzz(val) {
  return val % 3 === 0 && val % 5 === 0
    ? "FizzBuzz"
    : val % 3 === 0
    ? "Fizz"
    : val % 5 === 0
    ? "Buzz"
    : val
}

function handleClick() {
  const input = document.querySelector("input")
  const inputValue = Number(input.value)
  if (!inputValue) {
    alert("Número inválido.")
  } else {
    result = fizzBuzz(inputValue)
    alert(result)
  }
}
