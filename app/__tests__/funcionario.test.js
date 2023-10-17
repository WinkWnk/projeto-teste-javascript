const funcionario = require("../funcionario")

test ("Salário será verdadeiro ao er igual a um valor passado", ()=>{
    expect(funcionario.getSalario()).toBe(1300)
})