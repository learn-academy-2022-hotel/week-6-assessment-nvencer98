// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// psuedo code: 
// input: array of objects
// output: array of objects with a sentence about each person and name capitilized.
// create jest test.
// test 
// output from test: ReferenceError: sentenceCapMaker is not defined

      // 36 | describe("sentenceCapMaker", () => {
      //   37 |   it("returns names cap and in sentence", () =>{
      // > 38 |     expect(sentenceCapMaker()).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      //      |     ^
      //   39 |   } )
      //   40 | })
      //   41 |
  
// create function, possibly use touppercase i will be calling on certian keys in the object and use string interpolation to create a sentence about the person. use a for of loop , take strings from array and upcase seperatly and add into array??? 

// test:  PASS  ./code-challenges.test.js
//   sentenceCapMaker
//   ✓ returns names cap and in sentence (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.68s.



describe("sentenceCapMaker", () => {
  it("returns names cap and in sentence", () =>{
    expect(sentenceCapMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  } )
})

const sentenceCapMaker = (object) => {
  let array = []
  for (const person of object){
    let job = person.occupation
    let name = person.name
    let split = name.split(" ")
    let capitilized = split[0][0].toUpperCase()
    let restOfWord = split[0].substring(1)
    let capitilized2 = split[1][0].toUpperCase()
    let restOfWord2 = split[1].substring(1)
    let firstName = (capitilized + restOfWord)
    let lastName = (capitilized2 + restOfWord2)
    array.push(`${firstName} ${lastName} is ${job}.`)
 
  }
  return array
}

// ---------THAT WAS TERRIBLE AND TOOK HOURS----------



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// psuedo code

// input: mixed data array
// output: only numbers in array, remainders after dividied by 3. 
// create test 
// pass test
// 8 | describe("getRemainders", () => {
//   99 |   it("returns names cap and in sentence", () =>{
//     > 100 |     expect(getRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//           |                                        ^
//       101 |   } )
//       102 | })
//       103 |

//       at Object.toEqual (code-challenges.test.js:100:40)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2


// create function, filter array once numbers are identifuied, map array to create new array. have it % 3. 




describe("getRemainders", () => {
  it("does things", () =>{
    expect(getRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  } )
})
describe("getRemainders", () => {
  it("does things", () =>{
    expect(getRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  } )
})



function getRemainders(arr) {
  return arr.filter(item => typeof item === 'number')
    .map(item => item % 3)
    
}
console.log(getRemainders(hodgepodge1))
console.log(getRemainders(hodgepodge2))




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.


// psuedo code:
// create test
// run test
// google information for built in functions.
// create function


describe("sumOfCubes", () => {
  it("also does things", () =>{
    expect(sumOfCubes(cubeAndSum1)).toEqual(99)
  } )
})
describe("sumOfCubes", () => {
  it("also does things", () =>{
    expect(sumOfCubes(cubeAndSum1)).toEqual(99)
  } )
})

function sumOfCubes(numbers) {
  return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

console.log(sumOfCubes(cubeAndSum1))
console.log(sumOfCubes(cubeAndSum2))
