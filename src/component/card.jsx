import React, { useState } from 'react';

const Card = () =>{
   
    const[datas]=useState([
      {title: "Hitesh Sandwich",description:"₹50 for one",review:"4.5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-UF1TFbSB9RmZf4SQkUWzkZsuRKGKtjAeA&usqp=CAU",location:"https://goo.gl/maps/JgNYVKV6qmus7r9s8",id: 1},
      {title: "Bharosa",description:"₹100 for one",review:"5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbDfH6ThfoF4EKBtpxniWMwOVgwWT1uLv9Q&usqp=CAU",location:"https://goo.gl/maps/KxTrTmp9HruxXd96A",id: 2},
      {title: "Lachhubhai ",description:"₹50 for one",review:"4.2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0nSkIwjV697eI-4pkzFr4khVirUDwACgBg&usqp=CAU",location:"https://g.page/lachhubhai-ganthiyawala?share",id: 3},
      {title: "Tea chat",description:"₹75 for one",review:"4.8",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWlS77Zwt_DMmJgvjnsVuid8dkysUBjBT2g&usqp=CAU",location:"https://goo.gl/maps/VQUvPFKvuMmnQx6XA",id: 4},
      {title: "Maska Chaska",description:"₹120 for one",review:"4.8",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bZtm1HQsam4dPHZdumPpTnOhT37jYg6OIw&usqp=CAU",location:"https://goo.gl/maps/1mVz75RGnE5DyDBS9",id: 5}
      
  ])
    
    return(
        <div className="sandwich">
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
export default Card