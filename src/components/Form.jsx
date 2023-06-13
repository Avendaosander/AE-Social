import { useState } from "react"
import { generarID } from "../logic/createID"

export default function Form(props){
    const [error,setError]=useState("")
    const [state,setState]=useState({
        id:"",
        username:"",
        message:""
    })

    const handleChange=({currentTarget:input})=>{
        setState({...state,[input.name]:input.value})
        console.log(state) 
    }
    const handleSubmit=()=>{
        const id=generarID()
        setState({id:id})  
        if (state.username==="") {
            setError("Ingresa tu usuario por favor")
        }else if (state.message==="") {
            setError("Ingresa el mensaje por favor")
        }else {
            props.handleTweets()
            localStorage.setItem('message', JSON.stringify(state));
        }
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div className="min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                    <input 
                    type="text" 
                    name="username"
                    onChange={handleChange}
                    className="rounded-full h-8 mt-2 bg-slate-900 text-color-white border-none outline-none text-blue-100"
                    value={state.username}
                    placeholder=" Usuario"
                    />
                    <hr className="flex-auto w-28"/>
                </div>
                <div className="flex min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                <input 
                    type="text" 
                    name="message"
                    onChange={handleChange}
                    className="flex-auto w-64 rounded-l-full h-10 mb-2 bg-slate-600 outline-none text-blue-100"
                    value={state.message}
                    placeholder=" Escribe un message"
                    />
                    <button type="submit" className="bg-slate-600 rounded-r-full text-blue-100 mb-2">Crear</button>
                </div>
                {error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center text-center'>{error}</div>}
                </form>
            </div>
        )
    }
