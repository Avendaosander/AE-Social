import { useState } from 'react'
import { BsHeart, BsTrash, BsHeartFill, BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { toggleLikeLS } from '../logic/toggleLikeLS'
import { toggleFavLS } from '../logic/toggleFavLS'

function Tweets({ handleModalDelete, tweet, setTweets }) {
   const [like, setLike] = useState(tweet.like || false)
   const [fav, setFav] = useState(tweet.fav || false)

   const handleLike = (tweetID) => {
      setLike(!like)
      const newListOfTweets = toggleLikeLS(tweetID, !like)
      setTweets(newListOfTweets)
   }

   const handleFav = (tweetID) => {
      setFav(!fav)
      const newListOfTweets = toggleFavLS(tweetID, !fav)
      setTweets(newListOfTweets)
   }

   return (
      <article className='relative flex flex-col justify-around min-h-24 w-4/5 sm:w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 bg-slate-800'>
         <h3 className='text-slate-300'>@{tweet.user}</h3>
         <p className='text-white text-sm border-b-[1px] border-slate-500 pb-2 mb-2'>
            {tweet.tweet}
         </p>
         <div className='flex justify-evenly'>
            <button onClick={() => handleLike(tweet.id)}>
               {like ? (
                  <BsHeartFill className='text-red-500' />
               ) : (
                  <BsHeart className='text-slate-500' />
               )}
            </button>
            <button onClick={() => handleModalDelete(tweet.id)}>
               <BsTrash className='text-slate-500' />
            </button>
            <button onClick={() => handleFav(tweet.id)}>
               {fav ? (
                  <BsBookmarkHeartFill className='text-red-500' />
               ) : (
                  <BsBookmarkHeart className='text-slate-500' />
               )}
            </button>
         </div>
      </article>
   )
}

export default Tweets
