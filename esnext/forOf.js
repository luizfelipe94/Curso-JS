for (let letra of "Lu1z"){
    console.log(letra)
}

const assuntos = ['Map', 'Set', 'Promise']
for (let i in assuntos){
    console.log(i)
}

for (let assun of assuntos){
    console.log(assun)
}

const assuntosMap = new Map([
    ['Map', { aborado: true }],
    ['Set', { aborado: true}],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log (chave)
}

for (let chave of assuntosMap.values()){
    console.log (chave)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log (ch, vl)
}