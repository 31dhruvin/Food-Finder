import React, { useState } from 'react';

const Footer = () =>{
   
    const[datas,setDatas]=useState([
      {title: "Dragon Chinese",description:"₹100 for one",review:"4.5",image:"https://fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg",location:"https://goo.gl/maps/PQWG26PvBz3dVGqv8",id: 1},
      {title: "Chaska Maska",description:"₹120 for one",review:"5",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgd1rtiZs5ByAx06cC6TU0EX2l1lcsDl6dQ&usqp=CAU",location:"https://goo.gl/maps/GQRShP2hES4nFdj16",id: 2},
      {title: "Chinese Point",description:"₹150 for one",review:"4.2",image:"https://b.zmtcdn.com/data/images/cuisines/unlabelled/8e296a067a37563370ded05f5a3bf3ec.jpg",location:"https://goo.gl/maps/R3KtKxmCvm9SJ4JH6",id: 3},
      {title: "Crave Eatbles",description:"₹200 for one",review:"4.8",image:"https://www.madhuseverydayindian.com/wp-content/uploads/2020/01/indian-fried-rice-pic-500x500.jpg",location:"https://g.page/craveeatablesrupani?share",id: 4}
      
  ])
    
    return(
        <div className="chinese">
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
export default Footer
