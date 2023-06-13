export const toggleFavLS = (tweetID, fav) => {
   const tweetsJson = localStorage.getItem('Tweet')
   if (!tweetsJson) return 
   const tweetsLS = JSON.parse(tweetsJson)
   
   // Obtenemos el tweet a modificar el estado del Fav
   // Para obtener el tweet, debe cumplirse la condicion que los ID de los tweets deben ser iguales
   const tweetToUpdate = tweetsLS.find(tweet => tweet.id === tweetID);

   // Si se encuentra este tweet procede a modificar su estado de Fav
   if (tweetToUpdate) {
      // En el tweet hayado se asigna el estado del Fav (True o false)
      tweetToUpdate.fav = fav

      // Se guarda los tweets en LocalStorage
      localStorage.setItem('Tweet', JSON.stringify(tweetsLS))

      // Retorna el array de tweets con el estado de fav actualizado
      return tweetsLS
   }
}