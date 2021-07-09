import React, { useState } from 'react';

const About = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Muni Farsan",description:"₹200 for one",review:"4.5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrXi76-7ZHjWg537c7KveE-4_RTSbAwJnZw&usqp=CAU",location:"https://goo.gl/maps/UGc7a9U5uGNraFsZ9",id: 1},
      {title: "Crave eatables",description:"₹180 for one",review:"5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18cJhZ1PFgzbFToc5coBq_D48qex8lPPhlA&usqp=CAU",location:"https://g.page/craveeatablesrupani?share",id: 2},
      {title: "Chinese point",description:"₹150 for one",review:"4.2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGPbdI3QvAoc_CNeVF-91843XCMLERagz1Q&usqp=CAU",location:"https://goo.gl/maps/zFyPHVjHbykwKaUp9",id: 3},
      {title: "food point",description:"₹250 for one",review:"4.8",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGPbdI3QvAoc_CNeVF-91843XCMLERagz1Q&usqp=CAU",location:"https://goo.gl/maps/ZDHPZM62SgKLBC7S9",id: 4}
      
  ])
    
    return(
      <>
      <div className="main1">
        <div className="sweets">
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
        </div>
        </>
    )
}
export default About
