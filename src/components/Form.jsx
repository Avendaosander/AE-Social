import React from "react"
import { generarID } from "../logic/createID"

class Form extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={id:"",user:"", tweet:""}
    }
    handleChange2=(e)=>{
        this.setState({user:e.target.value})
        console.log(e.target.value)
    }
    handleChange=(e)=>{
        this.setState({tweet:e.target.value})
        console.log(e.target.value)
    }
    handleSubmit=()=>{
        if (this.state.id==="") {
            console.log(this.state)
            const id=generarID()
            this.setState({id:id})   
        }else if (this.state.user==="") {
            alert("Ingresa tu usuario por favor")
        }else if (this.state.tweet==="") {
            alert("Ingresa el tweet por favor")
        }else{
            this.props.handleTweets()
            localStorage.setItem('Tweet', JSON.stringify(this.state));
        }
    }
    render(){

        return(
            <div>
                <div className="min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                    <input 
                    type="text" 
                    onChange={this.handleChange2}
                    className="rounded-full h-8 mt-2 bg-slate-900 text-color-white border-none outline-none text-blue-100"
                    value={this.state.user}
                    placeholder=" Usuario"
                    />
                    <hr className="flex-auto w-28"/>
                </div>
                <div className="flex min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    className="flex-auto w-64 rounded-l-full h-10 mb-2 bg-slate-600 outline-none text-blue-100"
                    value={this.state.tweet}
                    placeholder=" Escribe un Tweet"
                    />
                    <button onClick={()=>this.handleSubmit()} className="bg-slate-600 rounded-r-full text-blue-100 mb-2">Crear</button>
                </div>
                {this.error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center text-center'>{this.error}</div>}
            </div>
        )
    }



}
export default Form