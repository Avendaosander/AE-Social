import { useState } from 'react'
import logo from './assets/AESocial.jpg'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'

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

   return (
      <>
         {/* Header */}
         <img src={logo} alt="Logo AE Social" />
         <main>
            {/* Formulario para Tweets */}
            <section className='flex flex-col justify-center items-center gap-5 mb-16'>
               {tweetsArray.map((tweet) => (
                  <Tweets key={tweet.id} handleModalDelete={handleModalDelete} tweet={tweet}/>
               ))}
            </section>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete}/>}
         <Footer/>
      </>
   )
}

export default App