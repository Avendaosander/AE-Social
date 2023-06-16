import { useState } from "react"
import { CREATE_TWEET, GET_TWEETS } from "../graphql/tweets"
import { useMutation } from "@apollo/client"
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Form(){
    const [errorInput,setErrorInput]=useState("")
    const [state,setState]=useState({
        username:"",
        message:""
    })

    const [createTweet, {loading, error}] = useMutation(CREATE_TWEET, {
        refetchQueries: [
            {
                query: GET_TWEETS
            },
            "getTweets"
        ]
    })

    const handleChange=({currentTarget:input})=>{
        setState({...state,[input.name]:input.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if (state.username==="") {
            setErrorInput("Ingresa tu usuario por favor")
        }else if (state.message==="") {
            setErrorInput("Ingresa el mensaje por favor")
        }else {
            createTweet({
                variables: {
                    username: state.username,
                    message: state.message
                }
            })
            setState({username: state.username, message: ""})
        }
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
            <div className="min-h-24 w-[20rem] sm:w-[30rem] py-2 px-4 rounded-xl">
                <input 
                type="text" 
                name="username"
                onChange={handleChange}
                className="rounded-full h-8 mt-2 bg-slate-900 p-2 text-color-white border-none outline-none text-blue-100 "
                value={state.username}
                placeholder="Usuario"
                />
                <hr className="flex-auto w-28"/>
            </div>
            <div className="flex min-h-24 py-2 px-4 rounded-xl">
            <input 
                type="text" 
                name="message"
                onChange={handleChange}
                className="flex-auto w-8 rounded-l-full p-4 h-10 mb-2 bg-slate-600 outline-none text-blue-100"
                value={state.message}
                placeholder="Escribe un message"
                />
                <button disabled={loading} type="submit" className="bg-slate-600 rounded-r-full text-blue-100 mb-2"><AiOutlineDoubleRight className="mr-2"/></button>
            </div>
            {errorInput && <div className='w-[20rem] sm:w-[30rem] p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center'>{errorInput}</div>}
            </form>
        </div>
    )
}
