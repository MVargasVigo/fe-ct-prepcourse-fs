/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const arreglo = Object.entries(objeto);
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const sortedArr = string.split('').sort();
   const sortedStr = sortedArr.join('');
   let objetoFinal = {};
   for (let i in sortedStr) {
      const character = string[i];
      if (!objetoFinal[character]){
         objetoFinal[character] = 0;
      }
      objetoFinal[character]++;
   } return objetoFinal;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperCase = [];
   let lowerCase = [];

   for (let i = 0; i < string.length; i++){
      if (string[i] === string[i].toUpperCase()) upperCase.push(string[i]);
      else lowerCase.push(string[i]);
   }
   let retornable = [...upperCase, ...lowerCase];
   return retornable.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   /*tengo que separar la frase en palabras individuales, iterar cada palabra para imprimir su espejo y finalmente juntar todas las palabras en un solo string manteniendo el mismo orden*/
  const arreglo = frase.split(' ');
  let arregloVolteado = [];
  for (word of arreglo) {
      let palabra = "";
      for (let i = word.length - 1; i >= 0; i--){
         palabra += word[i];
      } arregloVolteado.push(palabra);
  } return arregloVolteado.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroVolteado = "";
   const numeroStr = String(numero);
   for (let i = numeroStr.length -1; i >= 0; i--){
      numeroVolteado += numeroStr[i]};
   if (numeroVolteado === numeroStr) {
      return "Es capicua";
   } else return 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const strNoABC = string.replace('a', '@').replace('b', '@').replace('c', '@');
   const splitStr = strNoABC.split('@').join('')
   return splitStr;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   /*debo iterar por cada elemento del arreglo, contar la longitud de cada una de ellas y sortearlo por dicha longitud*/
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:  
   let arreglo = [];
   for (let item of array1){
      for (let element of array2){
         if (item === element) {
            arreglo.push(item);
         }
      }
   } return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
