import React, {useState}from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({setTerm, history}) =>{

    const [input, setInput]=useState("")

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setTerm(input)
        history.push('/breweries')
    }

    return (
        <div >
            Enter a City: <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            <input type="button" value="Search" onClick={handleOnSubmit}/>
        </div>
    )
}

export default withRouter(Home);