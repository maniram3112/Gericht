import React from 'react';
import { SubHeading } from '../../Components';
import { images } from '../../Constants';
import './Chef.css';

const Chef = () => {
    return (
        <div className='app_bg app_wrapper section_padding'>
            <div className='app_wrapper_img app_wrapper_img-reverse'>
                <img src={images.chef} alt='chef'/>
            </div>
            <div className='app_wrapper_info'>
                <SubHeading title="Chef's Word"/>
                <h1 className='headtext_cormorant'>What We Believe In</h1>

                <div className='app_chef-content'>
                    <div className='app_chef-content_quote'>
                        <img src={images.quote} alt='quote'/>
                        <p className='p_opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                    </div>
                    <p className='p_opensans'> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
                </div>
                
                <div className='app_chef-sign'>
                    <p>Kevin Luo</p>
                    <p className='p_opensans'>Chef & Founder</p>
                    <img src={images.sign} alt='sign'/>
                </div>
            </div>
        </div>
    )
}

export default Chef
