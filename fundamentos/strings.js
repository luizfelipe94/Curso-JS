const nome = "luiz3felipe";

console.log(nome.charAt(3));
console.log(nome.charCodeAt(3));
console.log(nome.indexOf(3));

console.log(nome.substring(1));
console.log(nome.substring(0, 4));

console.log('Nome '.concat(nome).concat("!"));
console.log('Nome '+ nome + "!");

console.log(nome.replace(/\d/g, 'e'));
console.log(nome.replace(3, 'e'));

console.log('Ana, Maria, Pedro'.split(','));