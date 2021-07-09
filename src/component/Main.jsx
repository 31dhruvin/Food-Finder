import React from 'react'
import {BrowserRouter as Router,useHistory} from "react-router-dom"
const Main = (props) => {
  
  const history = useHistory()
  const datas=props.datas
  console.log(props,datas)

    return (
        <Router>
          <div className="main-class">
          <div className="text-body">
          <br />
          <br />
          <br />
          <br />
          <div className="bganim">
                <h1><p className="first" style={{marginBottom:"10px",marginTop:"50px",textAlign:"center" }}>Find.Eat.Repeat</p></h1><br />
                <h5> <p className="first-p">Want to eat the best street food across your city?</p></h5><br />
                <h5> <p className="first-p">Food finder will provide you a place to search for 1000's of the best street foods across your city.</p></h5>
                <br /> 
                <a href="#text-menu" className="btn btn-outline-light shadow-none  mr-2" aria-current="page" style={{marginRight:"20px"}}>Discover More</a>
                <a href="#text-join" className="btn btn-outline-light shadow-none  ml-2 px-4" aria-current="page">Join Us</a>
                <br/>   
       {/*   <hr /> */} 
       </div>
       <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          </div>
          <br/>
          <br />
          <br />
        <section>
          <div className="container text-join" id="text-join">
           <h1> <p className="p-join">Join Us</p></h1>
            <br /> 
           <h5> <p className="first-p" style={{letterSpacing:"4px"}}>Food finder provides a platform to add your street food restaurant and grow your business.</p></h5>
           <h5><p className="first-p"  style={{letterSpacing:"4px"}}>Click Below and fill in the form to join us.</p></h5>
              <br />
              <br />          
            <button className="btn btn-outline-light shadow-none" style={{width:"150px"}} type="submit" onClick={() => history.push('/addrestaurants')}>Join Us</button> 
              <br />
              <br />
              <br />
              <br />
              <br/>
              <br />
              </div>
              <br />
              <br/>
              <br />
              <br />
              <br/>
              <br />
              <br />
              <br />
              <br />
              <br />
        </section>
        <div className="container text-menu" id="text-menu">
          <h1 className="top-picks">Top picks for you</h1>
          <br />
          <div className="text-searches">
           <br />
          <div className="dropdown">
            <button class="btn btn-outline-light dropdown-toggle-danger shadow-none" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{letterSpacing:"2px"}}>
              Search by City
            </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
            <li><button className="dropdown-item" type="button" onClick={() => history.push('')}>Bhavnagar</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/surat')}>Surat</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/baroda')}>Baroda</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/abd')}>Ahmedabad</button></li>
            <li><button className="dropdown-item" type="button" onClick={() => history.push('/rajkot')}>Rajkot</button></li>      
          </ul>
          </div>
          </div>
        <div className="menu" >      
        <div className="container">
        <div className="row">
          <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
              <div className="card-img-wrapper">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"  />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center"}}><strong>Pizza</strong></h5>
                <div className="card-content">
                <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"  type="submit" onClick={() => history.push('/pizza')}>Find here</button> 
                  </div>
              </div>
            </div>
          </div>  
          <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
              <div className="card-img-wrapper">
              <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/3/18874453/149f06756baf3ecb873c7a13925f626e_o2_featured_v2.jpg?output-format=webp"  /> 
                  </div>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:"center"}}><strong>Vada Pav</strong></h5>
                <div className="card-content">
                  <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"  type="submit" onClick={() => history.push('/vadapav')}>Find here</button>
                 </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
              <div className="card-img-wrapper">
              <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"  style={{}} ><strong>Chaat</strong></h5>
              <div className="card-content">
                  <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"  type="submit" onClick={() => history.push('/chaat')}>Find here</button>
                  </div>
              </div>
            </div>
          </div>
              <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
              <div className="card-img-wrapper">
                <img className="card-img-top" src="https://b.zmtcdn.com/data/homepage_dish_data/2/8628f4b5850aff6831d43f12a5464b44.png" />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{}}><strong>Chinese</strong></h5>
                <div className="card-content">
                  <p className="card-text" style={{marginTop:"23px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"   type="submit" onClick={() => history.push('/chinese')}>Find here</button>
                  </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
                <div className="card"style={{borderRadius:"15px",width:"13rem"}}>
                  <div className="card-img-wrapper">
                    <img className="card-img-top" src="https://b.zmtcdn.com/data/pictures/5/18826055/0b052f5519bcc9295cec236463974891_featured_v2.jpg?output-format=webp"  />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title" style={{}}><strong>South Indian</strong></h5>
                    <p className="card-text" style={{marginTop:"35px"}}>To explore more places click below</p>
                    <button className="btn btn-dark shadow-none"   type="submit" onClick={() => history.push('/southIndian')}>Find here</button>
                    </div>
                </div>
              </div>
              <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
                <div className="card"style={{borderRadius:"15px",width:"13rem"}}>
                  <div className="card-img-wrapper">
                    <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_images/a15785e1bceadae9f4ed63f6aad85e661602873916.png"  />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"  style={{}} ><strong>Paav bhaji</strong></h5>
                    <div className="card-content">
                      <p className="card-text" style={{marginTop:"23px"}} >To explore more places click below</p>
                      <button className="btn btn-dark shadow-none"   type="submit" onClick={() => history.push('/paavbhaji')}>Find here</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <div className="card" style={{borderRadius:"15px",width:"13rem"}}>
              <div className="card-img-wrapper">
                <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/20c/e48b43f93ac3805dca08587465e1420c.jpg"  />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{}}><strong>Bateti Bhungra</strong></h5>
                <div className="card-content">
                  <p className="card-text" style={{marginTop:"25px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"  type="submit" onClick={() => history.push('/bateti')}>Find here</button>
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
                    <h5 className="card-title" style={{}}><strong>Sandwich</strong></h5>
               <div className="card-content">
                  <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"  type="submit" onClick={() => history.push('/sandwich')}>Find here</button>
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
                    <h5 className="card-title"  style={{}} ><strong>Sweets</strong></h5>
                <div className="card-content">
                  <p className="card-text" style={{marginTop:"20px"}}>To explore more places click below</p>
                  <button className="btn btn-dark shadow-none"   type="submit" onClick={() => history.push('/sweets')}>Find here</button>
                 </div>
              </div>
            </div>
          </div>
          </div></div>
          </div> 
          </div>
          </div>
          </Router>  
    )
}
export default Main

