import React, { useState } from 'react'
import Axios from 'axios'
import Result from './Result'

function Search() {
    const [food,setFood] = useState("")
    const [recipes,setrecipes] = useState([])
    //const [isLoading, setLoading] = useState(false)
    //const [finder,setFinder] = useState([])
    //const isEmpty = !finder || finder.length === 0;
    const inputEvent=(event) => {
      
        const data =event.target.value;
        setFood(data)
   
  }
  //const API_KEY ="60b136a71f2661001700015f"
  const url=`https://60b136a71f2661001700015f.mockapi.io/food/f1/Burger?${food}`
  async function search(){
    const result = await Axios.get(url)
    setrecipes(result.data)
  }
  const onsubmit = (e) =>{
    e.preventDefault()
    search()
  }
    return (
      <>
    <form className="d-flex" onSubmit={onsubmit}>
      <input className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" value={food} onChange={inputEvent} required/>
      <button className="btn btn-outline-dark shadow-none" type="submit">Search</button>
    </form>{
      food === "burger" ? (
        <div className="findx" id="findx" style={{textAlign:"center"}}>
      {recipes.map((find) =>{
        return <Result find/*accepting*/={find}/*value which we are providing*/></Result>
      })}
    </div>

      ):(
        food === "Burger" ? (
          <div className="findx" id="findx" style={{textAlign:"center"}}>
      {recipes.map((find) =>{
        return <Result find/*accepting*/={find}/*value which we are providing*/></Result>
      })}
    </div>
        ):(
          food === "burfer" ?(
            <h1 style={{textAlign:"center",marginTop:"5%"}}>Not Found !!</h1>
          ): food === "" ? (
            <div></div>
          ):(
            food !== "burger" ?(
              <h1 style={{textAlign:"center",marginTop:"5%"}}>Not Found !!</h1>
            ):(
              <div></div>
            )
          )
        )
        
      )
    }
    
    
    </>
    )
}
export default Search
