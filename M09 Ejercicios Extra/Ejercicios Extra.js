/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nwe = []
   for (const inm in objeto){
      nwe.push([inm,  objeto[inm]])
   }
   return nwe;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var ob = {}
   for (var i = 0; i < string.length; i++){
      if(ob.hasOwnProperty(string[i])){
         ob[string[i]] +=1
      }
      else {
         ob[string[i]] = 1
      }
   }
   
   const orgOb = {};
   const funor = Object.keys(ob).sort();

   for (const i of funor){
      orgOb[i] = ob[i]
   }

   return orgOb;
   }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let minu = "";
   let mayu = "";

   for (let i = 0; i < string.length; i++){
      if (string[i] === string[i].toLowerCase()) {
         minu += string[i];
      }
      else{
         mayu += string[i];
      }
   } 
return (mayu + minu);

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let pala = frase.split(' ');
   let palain = pala.map(palabra => palabra.split('').reverse('').join(''));
    return palain.join(' ');

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numst = numero.toString();
   let numstR = numst.split('').reverse().join('')
   if (numst === numstR){
      return "Es capicua"
   } else{
      return "No es capicua"

   } 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let as = string.split('');
   for (i = 0; i < as.length; i++)
   if(as[i] === "a" || as[i] === "b" || as[i] === "c"){
      delete(as[i])
   } 
   return as.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b)=> a.length - b.length);
   return arrayOfStrings;
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let ca = [];
   array1.forEach(element1 => {
      array2.forEach(elemento2=>{
         if (element1 === elemento2){
            ca.push(element1)
         } else{
            return []
         }
      })
   });
   return ca;
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
