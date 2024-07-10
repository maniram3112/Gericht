import React from 'react';
import './Menuitems.css';

const Menuitems = ({ title, price, tags }) => (
    <div className="app_menuitem">
        <div className="app_menuitem-head">
        <div className="app_menuitem-name">
            <p className="p_cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        </div>
        <div className="app_menuitem-dash" />
        <div className="app_menuitem-price">
            <p className="p_cormorant">{price}</p>
        </div>
        </div>

        <div className="app_menuitem-sub">
        <p className="p_opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
        </div>
    </div>
);

export default Menuitems;