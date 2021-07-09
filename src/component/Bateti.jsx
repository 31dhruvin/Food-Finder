import React, { useState } from 'react';

const Bateti = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Bharatbhai",description:" ₹50 for one",review:"4.9",image:"https://rasoithigujaratirecipes.in/wp-content/uploads/2017/03/Bhugda-Bateta-Recipe-Photo..jpg",location:"https://goo.gl/maps/mAfELfCAhXtURCaHA",id: 1},
      {title: "Place 2",description:"₹80 for one",review:"4.5",image:"https://cakepalacia.com/wp-content/uploads/2020/04/Bhungara-Bateta-Recipe.jpeg",location:"https://goo.gl/maps/2rdVvf42FpHokfmp9",id: 2},
      ])
    
    return(
      <div className="main1">
        <div className="bateti">
            {datas.map((data) => (
              <div className="card" style={{width:"13rem",marginLeft:"15%",marginTop:"20px",borderRadius:"20px"}}>
              <div className="card-img-wrapper" style={{height:"125px"}}>
                 <img className="card-img-top" src={data.image} />
               </div>
           <div className="card-body">
             <h5 className="card-title"><strong>{data.title}</strong></h5>
             <h6 className="card-subtitle mb-2 text-muted"></h6>
             <p className="card-text" style={{marginTop:"50px"}}>{data.description}<br />{data.review}<span className="fa fa-star checked"></span></p>
             <button><a href={data.location} class="card-link" target="_blank"rel="noreferrer" style={{textDecoration:"none",color:"black",background:"white"}}>Get location</a></button>
            </div> 
           </div>
            )
            )}
        </div>
        </div>
    )
}
export default Bateti
