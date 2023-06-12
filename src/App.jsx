import { useState } from 'react'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'

const tweetsArray = [
   {
      id: '7643756347865',
      user: 'Avendaosander',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam no.'
   },
   {
      id: '843278573432847',
      user: 'FrontII',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus en nisl neque. Proin in turpis vel enim interdum bibendum. Etiam.'
   },
   {
      id: '463624576235',
      user: 'Alejo2608',
      tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin fermentum risus, ut posuere turpis congue at. Duis maximus nisi et lectus hendrerit, euismod ultrices turpis aliquet. Aenean eu feugiat.'
   }
]

function App() {
   // const [tweets, setTweets] = useState(tweetsArray)
   const [modalDelete, setModalDelete] = useState(false)

   const handleModalDelete = () => {
      setModalDelete(!modalDelete)
   }
   //Esto es solo para comprobar lo que me llegaba al local storage alexander pa que sepas, no es gran funcionalidad, gracias att:EUTIMIO
   const handleTweets=()=>{
      const tui=localStorage.getItem("Tweet")
      console.log(tui)
   }

   return (
      <>
         <Header/>
         <main>
            <section className='flex flex-col justify-center items-center gap-5 mb-16'>
               <Form/>
               {tweetsArray.map((tweet) => (
                  <Tweets key={tweet.id} handleModalDelete={handleModalDelete} handleTweets={handleTweets} tweet={tweet}/>
               ))}
            </section>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete}/>}
         <Footer/>
      </>
   )
}

export default App