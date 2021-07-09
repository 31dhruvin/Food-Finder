import React, { useState } from 'react';

const Locho = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Gopal Locho",description:"₹80 for one",review:"4.5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqqZdozafnoK5tMqUj4c7bmWHSvNYAvSa9g&usqp=CAU",location:"https://g.page/gopallochomahidharpura?share",id: 1},
      {title: "Jani Locho",description:"₹50 for one",review:"5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7XxfjytZwGmISUQFuLoEEE9tYHu9jZMoMg&usqp=CAU",location:"https://goo.gl/maps/22cUhhwxp8cj51C56",id: 2},
      {title: "Shreeji Locho",description:"₹70 for one",review:"4.2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JAWG9Ys7cn-jjiTzAGaauZbenc-PTmcG9Q&usqp=CAU",location:"https://goo.gl/maps/LeohoiJFwh3m7E7N9",id: 3},
  ])
    
    return(
        <div className="locho">
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
export default Locho

