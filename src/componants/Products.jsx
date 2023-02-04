import axios from 'axios';
import { useEffect, useState } from "react"
import { useEffect } from 'react';


const Products = () => {

    const[movies, setmovies]=useState
    useEffect(()=>{
        async function gettingData(){
            const{data} = await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            console.log(data,"data here")
            setmovies(data);

        }
        gettingData();
    },[])
  return (
    <div>
       <h1> All Movies </h1>
       <div style={{display:"flex"}}
            <div style={{width:"20%", border:"1px solid black"}} Filter </div>
            <div style={{width:"80%", border:"1px solid black", display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {movies && movies.map((e,i)=>(
                <div key={i}>
                    <div>
                        <img src={e.Poster}/>
                        <h2>{e.Title}</h2>
                        <p>{e.Year}</p>
                        <p>{e.Runtime}</p>
                    </div>
                </div>
        
          ))}
         </div>
       </div>
       
    </div>
  )
}

export default Products