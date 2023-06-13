import { useMutation } from "@apollo/client"
import { DELETE_TWEET } from "../graphql/tweets"

function ModalDelete({ handleModalDelete, tweetID}) {
   const [deleteTweet] = useMutation(DELETE_TWEET, {
      refetchQueries: ['getTweets']
   })

   const handleDelete = () => {
      deleteTweet({
         variables: {
            id: tweetID
         }
      })
      handleModalDelete()
   }

   return (
      <section className='fixed z-10 bg-slate-500/20 top-0 right-0 bottom-0 left-0 flex justify-center items-center'>
         <article className='bg-slate-950 p-5 rounded-lg'>
            <h3 className='text-slate-300'>Quieres eliminar este Tweet?</h3>
            <div className='flex justify-around mt-3'>
               <button 
                  className='text-slate-300 ring-1 ring-slate-500 px-4 rounded-xl hover:bg-slate-500/20'
                  onClick={handleDelete}
               >
                  Si
               </button>
               <button
                  className='text-slate-300 ring-1 ring-red-600 px-4 rounded-xl bg-red-600 hover:bg-red-500'
                  onClick={() => handleModalDelete()}
               >
                  Cancelar
               </button>
            </div>
         </article>
      </section>
   )
}

export default ModalDelete
