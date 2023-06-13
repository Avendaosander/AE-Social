import { useState } from 'react'
import { BsHeart, BsTrash, BsHeartFill, BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { UPDATE_TWEET } from '../graphql/tweets'
import { useMutation } from '@apollo/client'


function Tweets({ handleModalDelete, tweet }) {
   const [like, setLike] = useState(tweet.like || false)
   const [fav, setFav] = useState(tweet.fav || false)
   const [updateTweet] = useMutation(UPDATE_TWEET, {
      refetchQueries: ['getTweets']
   })

   const handleLike = (tweetID) => {
      setLike(!like)
      updateTweet({
         variables: {
            id: tweetID,
            like: !like
         }
      })
   }
   
   const handleFav = (tweetID) => {
      setFav(!fav)
      updateTweet({
         variables: {
            id: tweetID,
            fav: !fav
         }
      })
   }

   return (
      <article className='relative flex flex-col justify-around min-h-24 w-4/5 sm:w-[30rem] py-2 px-4 rounded-xl ring-1 ring-slate-500 bg-slate-800'>
         <h3 className='text-slate-300'>@{tweet.username}</h3>
         <p className='text-white text-sm border-b-[1px] border-slate-500 pb-2 mb-2'>
            {tweet.message}
         </p>
         <div className='flex justify-evenly'>
            <button onClick={() => handleLike(tweet._id)}>
               {like ? (
                  <BsHeartFill className='text-red-500' />
               ) : (
                  <BsHeart className='text-slate-500' />
               )}
            </button>
            <button onClick={() => handleModalDelete(tweet._id)}>
               <BsTrash className='text-slate-500' />
            </button>
            <button onClick={() => handleFav(tweet._id)}>
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
