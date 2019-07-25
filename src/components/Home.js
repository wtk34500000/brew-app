import React, {useState}from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({setTerm, history}) =>{

    const [input, setInput]=useState("")

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setTerm(input)
        setInput("")
        history.push('/breweries')
    }

    return (
        <nav className="container navbar navbar-light bg-dark">
            <a href="/"className="navbar-brand text-white font-weight-bold">Brewery Finder</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" value={input} placeholder="Search by U.S Cities" aria-label="Search" onChange={(e)=> setInput(e.target.value)}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleOnSubmit}>Search</button>
            </form>
        </nav>
    )
}

export default withRouter(Home);