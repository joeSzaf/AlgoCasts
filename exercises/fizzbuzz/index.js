// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Joe's solution
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++){
//     let message = ""
//     if (i % 3 == 0) {
//       message += "fizz"
//     }
//     if (i % 5 == 0) {
//       message += "buzz"
//     }
//
//     if (message == "") {
//       console.log(i)
//     } else {
//       console.log(message)
//     }
//   }
// }

// soultion
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // check to see if the number is a multiple of both three and five
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

module.exports = fizzBuzz;
