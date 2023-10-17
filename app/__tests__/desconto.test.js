const freteGratis = require("../desconto")

test("frete será verdadeiro para valores maior ou igual a 150", ()=>{
    expect(freteGratis(200)).toBeTruthy() //Espera que o resultado seja verdadeiro
})

test("Frete será verdadeiro para valores menor ou igual a zero", ()=>{
    expect(freteGratis(-8)).toBeLessThanOrEqual(-20)
})

