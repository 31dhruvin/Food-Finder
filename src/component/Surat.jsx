//const[surat,setSurat]=useState([
  //{title: "Locho",description:"To explore more places click below",review:"4.8",image:"https://b.zmtcdn.com/data/dish_images/3339bbfaddaa0ab30c579f94daceea4f1613233013.png",id: 1},
  //{title: "Pizza",description:"To explore more places click below",review:"4.5",location:"https://goo.gl/maps/mAfELfCAhXtURCaHA",image:"https://b.zmtcdn.com/data/images/cuisines/unlabelled/9778d5d219c5080b9a6a17bef029331c.jpg",id: 5},
  //{title: "Vadapav",description:"To explore more places click below",review:"4.5",location:"https://goo.gl/maps/65mYNHe44CqXLxD7A",image:"https://b.zmtcdn.com/data/dish_images/3339bbfaddaa0ab30c579f94daceea4f1613233013.png",id: 6}
  // ])
   import React from 'react'
   import {BrowserRouter as Router,useHistory} from "react-router-dom"
   const Main = (props) => {
     
     const history = useHistory()
     const datas=props.datas
     console.log(props,datas)
     
       return (
           <Router>
             <div className="text-body">
              
           <div className="menu">      
           <div className="container">
           <div className="row">
             <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                   <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBC0dwEXjAn9I6d8UPT0tAqVcg1aBnNX9x4Q&usqp=CAU"  />
                 </div> 
                 <div className="card-body">
                   <h5 className="card-title" style={{textAlign:"center",color:"white"}}><strong>Locho</strong></h5>
                   <div className="card-content">
                   <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/locho')}>Find here</button> 
                     </div>
                 </div>
               </div>
             </div>  
             <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                 <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/3e2/9e59a516cfd6d4f554c976e5c09873e2.jpg?output-format=webp"  /> 
                     </div>
                   <div className="card-body">
                     <h5 className="card-title" style={{color:"white",textAlign:"center"}}><strong>Sev Khamani.</strong></h5>
                   <div className="card-content">
                     <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none"style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/vadapav')}>Find here</button>
                    </div>
                 </div>
               </div>
             </div>
             <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                 <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/1ef/c71f32371a85ea5b63d56f2aab9131ef.jpg" />
                     </div>
                     <div className="card-body">
                       <h5 className="card-title"  style={{color:"white"}} ><strong>Ghari</strong></h5>
                 <div className="card-content">
                     <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/chaat')}>Find here</button>
                     </div>
                 </div>
               </div>
             </div>
                 <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                   <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/2f3/ec227805f305b656b16c757cecf522f3.jpg" />
                 </div>
                 <div className="card-body">
                   <h5 className="card-title" style={{color:"white"}}><strong>Undhiyu</strong></h5>
                   <div className="card-content">
                     <p className="card-text" style={{marginTop:"23px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/chinese')}>Find here</button>
                     </div>
                 </div>
               </div>
             </div>
             <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
                   <div className="card"style={{borderRadius:"15px",width:"13rem"}}>
                     <div className="card-img-wrapper">
                       <img className="card-img-top" src="https://image.shutterstock.com/image-photo/indian-gujarati-traditional-home-made-260nw-1881076624.jpg"  />
                     </div>
                     <div className="card-body">
                       <h5 className="card-title" style={{color:"white"}}><strong>Bhajiya</strong></h5>
                       <p className="card-text" style={{marginTop:"35px"}}>To explore more places click below</p>
                       <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/southIndian')}>Find here</button>
                       </div>
                   </div>
                 </div>
                 <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
                   <div className="card"style={{borderRadius:"15px",width:"13rem"}}>
                     <div className="card-img-wrapper">
                       <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_images/a15785e1bceadae9f4ed63f6aad85e661602873916.png"  />
                     </div>
                     <div className="card-body">
                       <h5 className="card-title"  style={{color:"white"}} ><strong>Paav bhaji</strong></h5>
                       <div className="card-content">
                         <p className="card-text" style={{marginTop:"23px"}} >To explore more places click below</p>
                         <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/paavbhaji')}>Find here</button>
                         </div>
                     </div>
                   </div>
                 </div>
                 <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                   <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/646/70c556759b901b0363e7797211656646.jpg"  />
                 </div>
                 <div className="card-body">
                   <h5 className="card-title" style={{color:"white"}}><strong>Khaman Dhokla</strong></h5>
                   <div className="card-content">
                     <p className="card-text" style={{marginTop:"25px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/bateti')}>Find here</button>
                    </div>
                 </div>
               </div>
             </div>
             <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",height:"55px",width:"13rem"}}>
                 <div className="card-img-wrapper">                  
                 <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/7/18881267/102f8b592b1ca2e17451b512ad2b91cb_o2_featured_v2.jpg"  />
                     </div>
                     <div className="card-body">
                       <h5 className="card-title" style={{color:"white"}}><strong>Sandwich</strong></h5>
                  <div className="card-content">
                     <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/sandwich')}>Find here</button>
                     </div>
                 </div>
               </div>
             </div>
                 <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
               <div className="card" style={{borderRadius:"15px",height:"55px",width:"13rem"}}>
                 <div className="card-img-wrapper">
                 <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/3/18979003/e25b2e8f57781c573a7494789628d357_o2_featured_v2.jpg"  />
                     </div>
                     <div className="card-body">
                       <h5 className="card-title"  style={{color:"white"}} ><strong>Sweets</strong></h5>
                   <div className="card-content">
                     <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                     <button className="btn btn-light shadow-none" style={{fontSize:"1.5vw"}} type="submit" onClick={() => history.push('/sweets')}>Find here</button>
                    </div>
                 </div>
               </div>
             </div>
             </div></div>
             </div> 
             </div>
             </Router>  
       )
   }
   export default Main
   
   