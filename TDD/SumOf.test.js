const { exportAllDeclaration } = require("@babel/types") 
const { default: TestRunner } = require("jest-runner")
const Maths = require("./SumOf")
const maths = new Maths 

test('2 and 5 adds to 7',()=>{
    expect(maths.sumOf(2,5)).toBe(7)
})

// test('Allows only numbers',()=>{
//     expect(maths.sumOf('a',4)).toThrow(TypeError("Inputs must be numbers"))
//     expect(maths.sumOf(2,'b')).toThrow(TypeError("Inputs must be numbers"))
// })

test('20 and 5 adds to 25',()=>{
    expect(maths.sumOf(20,5)).toBe(25)
})

test('-3 and 1 adds to -2',()=>{
    expect(maths.sumOf(-3,1)).toBe(-2)
})

test('-3 and -1 adds to -4',()=>{
    expect(maths.sumOf(-3,-1)).toBe(-4)
})

//'npm run test' to run the tests