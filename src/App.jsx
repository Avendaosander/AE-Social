import { useEffect, useState } from 'react'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'
import Sin from './components/SinTwe'

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
   const [tweets, setTweets] = useState(tweetsArray)
   const [modalDelete, setModalDelete] = useState(false)

   const handleModalDelete = () => {
      setModalDelete(!modalDelete)
   }
   //Esto es solo para comprobar lo que me llegaba al local storage alexander pa que sepas, no es gran funcionalidad, gracias att:EUTIMIO
   useEffect(()=>{
      handleTweets()
  },[tweetsArray])
   const handleTweets=()=>{
      const tui=JSON.parse(localStorage.getItem("Tweet"))
      tweetsArray.push(tui)
      console.log(tweetsArray)
   }

   return (
      <>
         <Header/>
         <main>
            {/* Formulario para Tweets */}
            <div>
               <section className='flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20 '>
                  <Form handleTweets={handleTweets}/>
                  {tweetsArray.map((tweet) => (
                     <Tweets handleModalDelete={handleModalDelete} tweet={tweet}/>
                  ))}
                  <h1>HOLA</h1>
               </section>
            </div>
            <div>
               <Sin/>
            </div>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete}/>}
         <Footer/>
      </>
   )
}

export default App