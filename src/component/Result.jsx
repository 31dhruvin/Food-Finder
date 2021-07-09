import React from 'react'
const Result=({find})=> {
    return (
      <div className="result">
        <div className="card mb-4" style={{width:"13rem",marginTop:"20px",borderRadius:"20px"}}>
        <div className="card-img-wrapper" style={{height:"125px"}}>
           <img className="card-img-top" src={find["avatar"]} alt="Card image cap" />
         </div>
        <div className="card-body">
          <h5 className="card-title"><strong>{find["name"]}</strong></h5>
          <h6 className="card-subtitle mb-2 text-muted"></h6>
          <p className="card-text" style={{marginTop:"50px"}}>{find["description"]}</p>
          <button><a href={find["location"]} class="card-link" target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"black",background:"white"}}>Get location</a></button>
          </div> 
        </div>
      </div>
    )
}
export default Result