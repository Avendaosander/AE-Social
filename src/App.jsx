import { useEffect, useState } from 'react'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'
import Sin from './components/SinTwe'


function App() {
   const tweetspai=[]
   const [tweets, setTweets] = useState([])
   const [modalDelete, setModalDelete] = useState(false)
   const [tweetDelete, setTweetDelete] = useState('')
   
   // localStorage.setItem('Tweet', JSON.stringify(tweets))

   const handleModalDelete = (tweetID = null) => {
      tweetID && setTweetDelete(tweetID)
      setModalDelete(!modalDelete)
   }
   //Esto es solo para comprobar lo que me llegaba al local storage alexander pa que sepas, no es gran funcionalidad, gracias att:EUTIMIO
   useEffect(()=>{
      handleTweets()
  },[])
  const handleTweets=()=>{
   const tui=JSON.parse(localStorage.getItem("Tweet"))
   setTweets(tui)
   tweetspai.push(tui)
   console.log(tweetspai)
   }
   return (
      <>
         <Header/>
         <main>
            {/* Formulario para Tweets */}
            <div>
               <section className='flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20 '>
                  <Form handleTweets={handleTweets}/>
                  {tweets.length > 0 
                  ? (
                     tweets.map((tweet) => (
                        <Tweets key={tweet.id} handleModalDelete={handleModalDelete} tweet={tweet} setTweets={setTweets}/>
                     ))
                  ) : (
                     <h2 className='text-slate-300 text-lg'>No hay Tweets disponibles</h2>)}
               </section>
            </div>
            <div>
               <Sin/>
            </div>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete} tweetID={tweetDelete} setTweets={setTweets}/>}
         <Footer/>
      </>
   )
}

export default App