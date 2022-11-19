/**
 * Escriba una función que tome un objeto (a) y un string (b) como argumento. Devuelva true si el objeto tiene una propiedad con la clave 'b'. Devuelva false de lo contrario.

function myFunction(a, b) {

   return
}
 */

function myFunction (a, b){
   for (const llave in a){
      console.log(llave)
      if (llave===b && a[llave]!== undefined){
         
         return true
      }
   }
   
   return false
}



console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'))




