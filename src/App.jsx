import { useState } from 'react'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'
import { useQuery } from '@apollo/client'
import { GET_TWEETS } from './graphql/tweets'


function App() {
   const [modalDelete, setModalDelete] = useState(false)
   const [tweetDelete, setTweetDelete] = useState('')
   
   const {loading, error, data} = useQuery(GET_TWEETS)

   if (loading) return <h2 className='text-slate-300 text-2xl text-center'>Loading...</h2>
   if (error) return <p className='text-slate-300 text-xl text-center'>{error}</p>

   const handleModalDelete = (tweetID = null) => {
      tweetID && setTweetDelete(tweetID)
      setModalDelete(!modalDelete)
   }

   return (
      <>
         <Header/>
         <main>
            <Form/>
            <section className='flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20 '>
               {data.tweets.length > 0 
                  ? (
                     data.tweets.map((tweet) => (
                        <Tweets key={tweet._id} handleModalDelete={handleModalDelete} tweet={tweet}/>
                     ))
                  ) : (
                     <h2 className='text-slate-300 text-lg'>No hay Tweets disponibles</h2>
                  )}
            </section>
         </main>
         {modalDelete && <ModalDelete handleModalDelete={handleModalDelete} tweetID={tweetDelete}/>}
         <Footer/>
      </>
   )
}

export default App