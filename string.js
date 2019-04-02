const escola = "Cod3r"
// Função pra pegar um determinado caractere na string.
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Pegar o codigo do caractere.
console.log(escola.charCodeAt(3))

// Pega apartir de um caracetere o seu indice.
console.log(escola.indexOf('3'))

// Chamadas a partir de inicio e do fim.
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

//  Função concat, faz concatenação entre strings.
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// Substitua todos os d(digitos) pela a letra é.
console.log(escola.replace(/\d/, 'e'))

// Substitua todas as W(letras e digitos) pela a letra e. O 'g' é global.
console.log(escola.replace(/\w/g, 'e'))

// Substitua o 3 pela a letra e.
console.log(escola.replace(3, 'e'))

// Usa-ze splite pra quebrar string em um Array.
console.log('Ana, Maria, Pedro'.split(','))

// rejax
console.log('Ana, Maria, Pedro'.split('/,/'))