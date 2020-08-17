import React, { useState } from 'react';

const Contact = () =>{

    const [data,setData] = useState({
            fullName:"",
            phone:"",
            email:"",
            message:"",
    });

    const InpEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullName}. Phone number is ${data.phone}. Email Id is ${data.email}. My message for you is that ${data.message}.`);
        setData(()=>{
            return{
                fullName:"",
                phone:"",
                email:"",
                message:"",
            }
        })
    }

    return(
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto'>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"  name='fullName' value={data.fullName} onChange={InpEvent} placeholder="Enter your name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InpEvent} placeholder="Enter your number"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InpEvent} placeholder="Enter you email id"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={InpEvent}></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;