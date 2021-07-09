import React, { useState } from 'react';

const User = () =>{
   
    const[datas]=useState([
      {title: "Palav",description:"₹100 for one",review:"5.0",image:"https://t3.ftcdn.net/jpg/02/71/97/68/360_F_271976820_Eo52QzvXrfv6oIgJVIC3It1qhKmX5aV9.jpg",location:"https://goo.gl/maps/aRmohbixNeb2wEwg7",id: 1},
      {title: "Dilbahar",description:"₹120 for one",review:"4.9",image:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",location:"https://goo.gl/maps/T4692gnshSUfVnS1A",id: 2},
      {title: "Dhamo",description:"₹120 for one",review:"4.2",image:"https://static.toiimg.com/photo/72208029.cms",location:"https://goo.gl/maps/55c7WoQtrgVLi8Wm8",id: 3},
      {title: "Honest",description:"₹200 for one",review:"4.8",image:"https://urbanfarmie.com/wp-content/uploads/Featured-Image-3-2.jpg",location:"https://goo.gl/maps/SKG5p17zpRtqR5Xc8",id: 4}
      
  ])
    
    return(
        <div className="paav">
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
export default User
