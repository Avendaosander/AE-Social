// Funcion para borrar un tweet del localstorage
export const deleteTweetLS = (tweetID) => {
   const tweetsJson = localStorage.getItem('Tweet')
   if (!tweetsJson) return 
   const tweetsLS = JSON.parse(tweetsJson)
   
   // Se crea un nuevo array sin el elemento que se va a eliminar
   const filterTweets = tweetsLS.filter(tweet => tweet.id !== tweetID);

   // Se guarda los tweets en LocalStorage
   localStorage.setItem('Tweet', JSON.stringify(filterTweets))

   return filterTweets
}