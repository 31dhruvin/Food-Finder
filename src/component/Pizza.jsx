import React, { useState } from 'react';

const Pizza = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Red Brick",description:" ₹150 for one",review:"4.5",image:"https://b.zmtcdn.com/data/images/cuisines/unlabelled/9778d5d219c5080b9a6a17bef029331c.jpg",location:"https://g.page/redbrick-pizza-bhavnagar-gujarat?share",id: 1},
      {title: "Enfume",description:"₹180 for one",review:"5",image:"https://b.zmtcdn.com/data/pictures/7/19254927/f4ec28bb17b5e6e6e1cdb7e15f4452cd_o2_featured_v2.jpg?output-format=webp",location:"https://g.page/Enfume?share",id: 2},
      {title: "Chatkazz",description:"₹150 for one",review:"4.2",image:"https://b.zmtcdn.com/data/pictures/chains/6/18871546/da98167debc6a27ad8415e9f53bc7453_o2_featured_v2.jpg?output-format=webp",location:"https://goo.gl/maps/V4SznXdN11qXm82M6",id: 3},
      {title: "Bharosa",description:"₹170 for one",review:"4.8",image:"https://b.zmtcdn.com/data/pictures/chains/0/18875540/3d5f0705fbd792def59d473ef8150ba8_o2_featured_v2.jpg?output-format=webp",location:"https://goo.gl/maps/YWwU5FDpVTYpGFTp6",id: 4}
  ])
    
    return(
        <div className="pizza">
            {datas.map((data) => (
              <div className="card" style={{width:"13rem",marginLeft:"15%",marginTop:"20px",borderRadius:"20px"}}>
              <div className="card-img-wrapper" style={{height:"125px"}}>
                 <img className="card-img-top" src={data.image}  />
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
export default Pizza
