import { useState } from 'react'
import Tweets from './components/Tweets'
import ModalDelete from './components/ModalDelete'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'
import { useQuery } from '@apollo/client'
import { GET_TWEETS } from './graphql/tweets'
import { FaSpinner } from "react-icons/fa";
import Favorites from './components/Favorites'


function App() {
   const [modalDelete, setModalDelete] = useState(false)
   const [tweetDelete, setTweetDelete] = useState('')
   const [modalFav,setModalFav]=useState(false)
   
   const {loading, error, data} = useQuery(GET_TWEETS)

   if (error) return <p className='text-slate-300 text-xl text-center'>{error}</p>

   const handleModalDelete = (tweetID = null) => {
      tweetID && setTweetDelete(tweetID)
      setModalDelete(!modalDelete)
   }
   const handleFavModal=()=>{
      setModalFav(!modalFav)
   }

   return (
      <>
         <Header handleFavModal={handleFavModal}/>
         {
            loading?
            <div className="flex justify-center text-center p-5">
               <h1 className='text-center text-slate-300'><FaSpinner className='w-32 h-32 animate-spin'/></h1>
            </div>:
            <div className="to">
               <main>
                  <section className='flex flex-col justify-center items-center gap-5 mb-40 sm:mb-20 '>
                     <Form/>
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
               {modalFav && <Favorites key={data} handleFavModal={handleFavModal}/>}
            </div>
         }
         <Footer/>
      </>
   )
}

export default App