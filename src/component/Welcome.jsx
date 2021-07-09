import React, { useState } from 'react';

const Welcome = () =>{
   
    const[datas]=useState([
      {title: "Malhar dhosa",description:"₹120 for one",review:"4.5",image:"https://b.zmtcdn.com/data/dish_images/83befdecd77e57a8c53d22b67d0b866d1612437905.png",location:"https://goo.gl/maps/7aEA5vQdYkPDUWYC6",id: 1},
      {title: "Shetty Mysore",description:"₹80 for one",review:"5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zWYUO_S2op9T20ybr2dilPtw0vB9tni4pA&usqp=CAU",location:"https://goo.gl/maps/cmv43WBnfEf1GsKa7",id: 2},
      {title: "Rohan Fast Food",description:"₹100 for one",review:"4.2",image:"https://b.zmtcdn.com/data/dish_images/9c179e4b2beb3b5e026346f946e502931613232962.png",location:"https://goo.gl/maps/MSEhsES7tBKRowXS9",id: 3},
      
  ])
    
    return(
        <div className="south">
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
export default Welcome