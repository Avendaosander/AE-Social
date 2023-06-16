import { gql } from "@apollo/client";

export const GET_TWEETS = gql`
   query getTweets{
      tweets {
         _id,
         username,
         message,
         like,
         fav
      }
   }
`

export const GET_FAVORITES = gql`
   query getTweets{
      tweetsFav{
         _id,
         username,
         message,
         like,
         fav
      }
   }
`
export const CREATE_TWEET = gql`
   mutation($username: String, $message: String) {
      createTweet(username: $username, message: $message) {
         _id,
         username,
         message,
         like,
         fav
      }
   }
`
export const UPDATE_TWEET = gql`
   mutation($id: ID!, $like: Boolean, $fav: Boolean) {
      updateTweet(_id: $id, like: $like, fav: $fav){
         _id,
         username,
         message,
         like,
         fav
      }
   }
`
export const DELETE_TWEET = gql`
   mutation($id: ID!) {
      deleteTweet (_id: $id){
         _id,
         username,
         message,
         like,
         fav
      }
   }
`
