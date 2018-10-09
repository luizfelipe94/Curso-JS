// Arrow Function
const soma = (a, b) => a + b
// ou
const soma1 = (a, b) => {
    return a + b
}
console.log(soma(2,3))

// parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3))