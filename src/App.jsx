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

   const handleModalDelete = () => {
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
                  <Tweets handleModalDelete={handleModalDelete} tweetspai={tweetspai}/>
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