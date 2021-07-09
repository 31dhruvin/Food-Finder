import React from 'react'
import {useHistory} from 'react-router-dom'
const Contact=(props)=> {
    const history = useHistory()
    const datas=props.datas
    return (
        <>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h1 className="text">Contact us</h1>
                </div>
                    <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control shadow-none" id="name" placeholder="Enter your name" style={{width:"50%"}} />
                </div>
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com" style={{width:"50%"}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Enter your message</label>
                    <textarea className="form-control shadow-none" id="message" rows="3" style={{width:"50%"}}></textarea>
                </div> 
                <div className="col-12">
                    <button className="btn btn-outline-dark shadow-none" type="submit" onClick={() => history.push('/home')}>Submit</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact
