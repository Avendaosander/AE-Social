import React from "react"


class Form extends React.Component{
    constructor(props){
        super(props)

        this.state={user:"", tweet:""}
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
        console.log(this.state)
        localStorage.setItem('Tweet', JSON.stringify(this.state));
    }
    render(){

        return(
            <div className="bg-slate-800">
                <div className="min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                    <input 
                    type="text" 
                    onChange={this.handleChange2}
                    className="ser"
                    value={this.state.user}
                    placeholder="Usuario"
                    />
                </div>
                <div className="grid grid-cols-3 min-h-24 w-[30rem] py-2 px-4 rounded-xl">
                <input 
                    type="text" 
                    onChange={this.handleChange}
                    className="col-span-2"
                    value={this.state.tweet}
                    placeholder="Tweet"
                    />
                    <button onClick={()=>this.handleSubmit()} className="bg-white">Crear</button>
                </div>
            </div>
        )
    }



}
export default Form