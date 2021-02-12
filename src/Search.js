import React, { Component,useState } from 'react';
import axios from 'axios'
import Result from './Result'

const Search = () => {
    const [followers,setfollowers]=useState(0)
   const [srcc,setsrcc]=useState(""); 
const[input,setinput]=useState("");
const[result,setresult]=useState([])
const [repos,setrepos]=useState([]);
const handlechange=(e)=>{
    setinput(e.target.value)
}
const handleclick = async()=>{
    try{
const result=await axios(`https://api.github.com/users/${input}/repos`)


const result2=await axios(`https://api.github.com/users/${input}`)
const followerslink=await axios(`https://api.github.com/users/${input}/followers`)
const ghgh=await axios(`https://api.github.com/repos/${input}/assignment4/contents/`)
//console.log(ghgh)
setfollowers(followerslink.data.length);
setrepos(result);
setresult(result2)
setsrcc((result2.data.avatar_url))
//console.log(result2.data.avatar_url)
    }
    catch(err){
        //console.log(err)
    }

}
    return (<>
        <div style={{padding:"20px"}}>
        <h2>Enter the username</h2>
        
      
      <input type="text" placeholder="username" onChange={handlechange}/>
      <button onClick={handleclick}>Submit</button>
    </div> 
    {srcc!==""?<>
    <img className="img" src={`${srcc}`}/>
   <h2>number of followers: {followers}</h2> 
    </>
    :""}
    <Result repos={repos} input={input}/>
    </>
    )
}

export default Search
