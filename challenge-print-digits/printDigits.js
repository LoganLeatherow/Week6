// const printDigits = num => {
//     const arrOfDigits = Array.from(String(num), Number);
//     console.log(num)
// }



const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
    }
  }

  printDigits(1452)
