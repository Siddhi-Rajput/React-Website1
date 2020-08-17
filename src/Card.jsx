import React from 'react';
import web from '../src/images/img1.png';
import {NavLink} from 'react-router-dom';

const Card= (props) =>{
    return(
        <>
         <div className='col-md-4 col-10 mx-auto'>
            <div class="card" >
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text </p>
                    <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;