import React, { useState } from 'react';

const About = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Muni Farsan",description:"₹200 for one",review:"4.5",image:"https://b.zmtcdn.com/data/images/cuisines/unlabelled_v2_1/1015.jpg",location:"https://goo.gl/maps/UGc7a9U5uGNraFsZ9",id: 1},
      {title: "Crave eatables",description:"₹180 for one",review:"5",image:"https://static.toiimg.com/photo/67087192.cms",location:"https://g.page/craveeatablesrupani?share",id: 2},
      {title: "Bachubhai",description:"₹180 for one",review:"5",image:"https://image.shutterstock.com/image-photo/indian-sweets-plate-includes-gulab-260nw-1196218465.jpg",location:"https://g.page/bachubhaidudhwala?share",id: 3},
  
  ])
    
    return(
        <div className="sweets">
            {datas.map((data) => (
              <div className="card" style={{width:"13rem",marginLeft:"15%",marginTop:"20px",borderRadius:"20px"}}>
              <div className="card-img-wrapper" style={{height:"125px"}}>
                 <img className="card-img-top" src={data.image} />
               </div>
           <div className="card-body">
             <h5 className="card-title"><strong>{data.title}</strong></h5>
             <h6 className="card-subtitle mb-2 text-muted"></h6>
             <p className="card-text" style={{marginTop:"50px"}}>{data.description}<br />{data.review}<span className="fa fa-star checked"></span></p>
             <button><a href={data.location} class="card-link" target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"black",background:"white"}}>Get location</a></button>
            </div> 
           </div>
            )
            )}
        </div>
    )
}
export default About
