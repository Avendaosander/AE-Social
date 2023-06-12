import { useState } from 'react'
import { BsHeart, BsTrash, BsHeartFill } from 'react-icons/bs'

function Tweets({ handleModalDelete, tweet, handleTweets }) {
   const [like, setLike] = useState(false)

   const handleLike = () => {
      setLike(!like)
      handleTweets()
   }


   return (
      <article className='flex flex-col justify-around  min-h-24 w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 bg-slate-800'>
         <h3 className='text-slate-300'>@{tweet.user}</h3>
         <p className='text-white text-sm border-b-[1px] border-slate-500 pb-2 mb-2'>
            {tweet.tweet}
         </p>
         <div className='flex justify-evenly'>
            <button onClick={handleLike}>
               {like ? (
                  <BsHeartFill className='text-red-500' />
               ) : (
                  <BsHeart className='text-slate-500' />
               )}
            </button>
            <button onClick={handleModalDelete}>
               <BsTrash className='text-slate-500' />
            </button>
         </div>
      </article>
   )
}

export default Tweets
