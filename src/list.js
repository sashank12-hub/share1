import React,{useState} from 'react'
import axios from 'axios'
import { useHistory,useLocation } from "react-router-dom";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FolderIcon from '@material-ui/icons/Folder';
const List = (props) => {
    var k=[];
    var inner=[];
    const[files,setfiles]=useState([])
    console.log(props.location.state)
    
    
     function download(item){ 
         if(item.type!=="dir"){
	 	axios({ 
	 		url:item.download_url, 
	 		method:'GET', 
	 		responseType: 'blob' 
	 }) 
	 .then((response) => { 
	 		const url = window.URL 
	 		.createObjectURL(new Blob([response.data])); 
	 				const link = document.createElement('a'); 
	 				link.href = url; 

                     var str=item.name
                     var a=str.split('.')    
	 				link.setAttribute('download', `${a[0]}.${a[1]}`); 
	 				document.body.appendChild(link); 
	 				link.click(); 
	 })
    }
    else{
} }

    async function handleclick(item){
        console.log(item)
        
        download(item)
    
try{
  
      }
      catch(err){
          console.log(err)
      }
      
      
         
      
      }
 async function handleclickk(item){
     console.log(item)
    var arr=[];
    
    axios.get(`${item.url}`)
      .then(function (response) {
       arr=[...response.data]
      gsgdg(arr)
      })
      .catch(function (error) {
        console.log(error);
      })
    
   
    
    
    
                  
       
    function gsgdg(arr){
       for(var i=0;i<arr.length;i++){
          if(arr[i].type=='file'){
            k.push(arr[i]);
            // console.log(k)
          }
          else{
             axios.get(arr[i].url).then(function (response) {
       arr=[...response.data]
       
       gsgdg(arr);
      })
             
             
             
            
          }
       }
    console.log(k)
    var listt=[...k];
     inner=listt.length!==0 ?(listt.map(item=>
        <tr >
        <td>{item.name}</td>
        
        <td><CloudDownloadIcon className="iconss" onClick={()=>handleclick(item)}/>
        </td>
          </tr>
        )):(<td> </td>)
    
    
    return inner;
    }
    
    
    
 }   
     var changed=props.location.state?.filter(item=>{return item.type!=="dir"});

     console.log(changed)


    const list=changed?.length !==0 ? (
        changed.map(item=>
            <tr >
            <td>{item.name}</td>
            { (item.type!=="dir")?
            <td><CloudDownloadIcon className="iconss" onClick={()=>handleclick(item)}/>
            </td>:<td>
            <FolderIcon className="iconss" onClick={()=>handleclickk(item)}/></td>}
              </tr>
            )
    ):<li>NO repos</li>

    return (
        <div>
        <div>
        <table>
        <thead>
        <tr>
        <th>filename</th>
        <th>download link</th>
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

export default List
