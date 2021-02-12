import React, { Component,useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import LinkIcon from '@material-ui/icons/Link';

   const Result = (props) => {
       let history =useHistory();
    const {repos,input}=props;
    async function handleclick(item){
     // console.log(item)
  
    
    try{
const result=await axios(`https://api.github.com/users/${input}/repos`)


const result2=await axios(`https://api.github.com/users/${input}`)
const followerslink=await axios(`https://api.github.com/users/${input}/followers`)
const ghgh=await axios(`https://api.github.com/repos/${input}/${item.name}/contents/`)
// console.log(result)
// console.log(ghgh.data)
// var arr=[];
// for(var i=0;i<ghgh.data.length;i++){
//     if(ghgh.data[i].type=="dir"){
//         var newt =await axios(`https://api.github.com/repos/${input}/${item.name}/contents/`)
//     }
// }



history.push({  pathname: '/future/content', state: ghgh.data})
    }
    catch(err){
       // console.log(err)
    }
    
    
       
    
    }
    const list=repos.length !==0 ? (
        repos.data.map(item=>
            <tr>
            <td>{item.name} 
            </td>
            <td> <LinkIcon className="iconss"  onClick={()=>handleclick(item)}/> </td>
            </tr>
           // <li >{item.name} </li>
            )
    ):<li>NO repos</li>
    return (
        <div>
        <div>
        
        <table>
        <thead>
        <tr>
        <th>Reponame</th>
        <th>repolink</th>
        
        </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
        
        </table>
    </div>
        </div>
    )
}
export default Result;


// class Result extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     const handleclick = async(item)=>{


//     history.push({  pathname: '/register', state: data_you_need_to_pass});

// }
//     render() { 
//         const {repos,input,history,location}=this.props;
        
//     console.log(repos)
//     // 
//     const list=repos.length !==0 ? (
//         repos.data.map(item=>
//             <li onClick={(item)=>handleclick(item)}>{item.name} </li>
//             )
//     ):<li>NO repos</li>
//         return ( <div>
//             <ul>
//             {list}
//             </ul>
//         </div> );
//     }
// }
 
// export default Result;