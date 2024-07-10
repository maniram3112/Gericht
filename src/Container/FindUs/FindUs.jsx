import React from 'react';
import { SubHeading } from '../../Components';
import { images } from '../../Constants';

const FindUs = () => {
    return (
        <div className='app_bg app_wrapper section_padding' id='contact'>
            <div className='app_wrapper_info'>
                <SubHeading title="Contant"/>
                <h1 className='headtext_cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
                <div className='app_wrapper-content'>
                    <p className='p_opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                    <p className='p_cormorant' style={{color:'#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
                    <p className='p_opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='p_opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
                <button type='button' className='custom_button' style={{marginTop: '2rem'}}>Visit Us</button>
            </div>
            <div className='app_wrapper_img'>
                <img src={images.findus} alt='Find us'/>
            </div>
        </div>
    )
}

export default FindUs
