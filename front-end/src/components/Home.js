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
        // <div >
        //     Enter a City: <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        //     <input type="button" value="Search" onClick={handleOnSubmit}/>
        // </div>

        <nav class="container navbar navbar-light bg-dark">
            <a href="/"class="navbar-brand text-white font-weight-bold">Brewery Finder</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" value={input} placeholder="Search by U.S Cities" aria-label="Search" onChange={(e)=> setInput(e.target.value)}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnSubmit}>Search</button>
            </form>
        </nav>
    )
}

export default withRouter(Home);