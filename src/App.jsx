import { useState } from 'react'
import logo from './assets/AESocial.jpg'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'

const tweetsArray = [
   {
      id: '7643756347865',
      user: 'Avendaosander',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam no.',
      like: false,
      fav: false
   },
   {
      id: '843278573432847',
      user: 'FrontII',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus en nisl neque. Proin in turpis vel enim interdum bibendum. Etiam.',
      like: false,
      fav: false
   },
   {
      id: '463624576235',
      user: 'Alejo2608',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin fermentum risus, ut posuere turpis congue at. Duis maximus nisi et lectus hendrerit, euismod ultrices turpis aliquet. Aenean eu feugiat.',
      like: false,
      fav: false
   }
]

function App() {
   const [tweets, setTweets] = useState(tweetsArray)
   const [modalDelete, setModalDelete] = useState(false)
   const [tweetDelete, setTweetDelete] = useState('')
   
   // localStorage.setItem('Tweet', JSON.stringify(tweets))

   const handleModalDelete = (tweetID = null) => {
      tweetID && setTweetDelete(tweetID)
      setModalDelete(!modalDelete)
   }

   return (
      <>
         {/* Header */}
         <img src={logo} alt="Logo AE Social" />
         <main>
            {/* Formulario para Tweets */}
            <section className='flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20 '>
               {tweets.length > 0 
                  ? (
                     tweets.map((tweet) => (
                        <Tweets key={tweet.id} handleModalDelete={handleModalDelete} tweet={tweet} setTweets={setTweets}/>
                     ))
                  ) : (
                     <h2 className='text-slate-300 text-lg'>No hay Tweets disponibles</h2>
                  )}
            </section>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete} tweetID={tweetDelete} setTweets={setTweets}/>}
         <Footer/>
      </>
   )
}

export default App