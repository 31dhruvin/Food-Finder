import React, { useState } from 'react';

const Vadapav = () =>{
  const[vaadas,setVaadas]=useState([
    {title: "Chetna Vadapaav",description:"₹50 for one",review:"4.5",location:"https://goo.gl/maps/Tkuc3Hx9XMABsNUC9",image:"https://b.zmtcdn.com/data/pictures/6/19734886/f18e6c6ad7840fe1b8d177a6ccd6344c_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",id: 1},
    {title: "New Karnavati",description:"₹60 for one",review:"4.1",location:"https://goo.gl/maps/5XmLnGPcux3ouXaq9",image:"https://b.zmtcdn.com/data/pictures/7/19130907/462dceac80dd3876a1ec29404e7c7bbc_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",id: 2},
    {title: "Chatkazz",description:"₹35 for one",review:"4.8",location:"https://goo.gl/maps/V4SznXdN11qXm82M6",image:"https://b.zmtcdn.com/data/dish_images/3339bbfaddaa0ab30c579f94daceea4f1613233013.png",id: 3}
])
    
    return(
        <div className="vadapav">
            {vaadas.map((vada) => (
              <div className="card" style={{width:"13rem",marginLeft:"15%",marginTop:"20px",borderRadius:"20px"}}>
                 <div className="card-img-wrapper" style={{height:"125px"}}>
                    <img className="card-img-top" src={vada.image} />
                  </div>
              <div className="card-body">
                <h5 className="card-title"><strong>{vada.title}</strong></h5>
                <p className="card-text" style={{marginTop:"50px"}}>{vada.description}<br />{vada.review}<span className="fa fa-star checked"></span></p>
                <button><a href={vada.location} class="card-link" target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"black",background:"white"}}>Get location</a></button>
                
              </div>
            </div>
                
            ))}    
        </div>
    )
}

export default Vadapav
