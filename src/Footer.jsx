import React from 'react';
import { waitForElementToBeRemoved } from '@testing-library/react';

const Footer = ()=>{
    return(
        <>
            <footer className='w-100 bg-light text-center'>
                <p>©️ 2020 SiddhiRajput. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    )
}

export default Footer;