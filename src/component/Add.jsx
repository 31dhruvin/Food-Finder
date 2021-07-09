import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {db} from '../Firebase'
import swal from "sweetalert";
const Add = (props) => {
    const history = useHistory()
    const datas=props.datas
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [type,setType] = useState("")
    const [description,setDescription] = useState("");
    const [pincode,setPincode] = useState("");
    const onsubmit = (e) =>{
        e.preventDefault();
        db.collection('Admin').add({
            name:name,
            type:type,
            phone:phone,
            address:address,
            email:email,
            description:description,
            pincode:pincode,

        })
        .then(() =>{
            swal(
                "Thank You",
                "Your response is submitted",
                "success"
              );
        })
        .catch(error => {
            swal(error.message, "", "error");
        })
        setName('')
        setPhone('')
        setType('')
        setEmail('')
        setAddress('')
        setDescription('')
        setPincode('')
    }
    return (
        <>
        <form className="container contact_div" onSubmit={onsubmit}>
           
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div className="mb-3">
                <div className="my-3">
                <h1 className="text">Add here!!</h1>
                </div>
                    <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control shadow-none" id="name" placeholder="Name of the place*" style={{width:"50%"}} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="type"></label>
                    <select name="type" id="type" style={{width:"50%"}} value={type} onChange={(e) => setType(e.target.value)}>
                        <option>Food Type</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Burger">Burger</option>
                        <option value="Vadapav">Vadapav</option>
                        <option value="Paav">Paav gathiya</option>
                        <option value="Chaat">Chaat</option>
                        <option value="Chinese">Chinese</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control shadow-none" id="email" placeholder="xyz@gmail.com*" style={{width:"50%"}} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="phone" className="form-label">Contact No.</label>
                        <input type="tel" className="form-control shadow-none" id="phone" placeholder="9429000000*" style={{width:"50%"}} value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control shadow-none" id="description" placeholder="Brief description*" rows="3" style={{width:"50%"}} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Address</label>
                    <textarea className="form-control shadow-none" id="address" placeholder="Address of your place*" rows="3" style={{width:"50%"}} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                </div> 
                <div className="mb-3">
                <label htmlFor="pinCode"></label>
                    <select name="pinCode" id="pinCode" style={{width:"50%"}} value={pincode} onChange={(e) => setPincode(e.target.value)}>
                        <option>Pincode</option>
                        <option value="364001">364001</option>
                        <option value="364002">364002</option>
                    </select>
                </div>
                <div className="col-12">
                <button className="btn btn-dark shadow-none px-4" type="submit" >Submit</button>
                </div>
                </div>
            </div>
            </form>
        </>
    )
}
export default Add
