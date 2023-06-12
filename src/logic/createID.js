// Funcion para generar un ID unico utilizando la fecha actual en milisegundos con un numero aleatorio
export const generarID = () => {
   const a = Date.now().toString(30)
   const b = Math.random().toString(30).substring(2)
   return a + b
}