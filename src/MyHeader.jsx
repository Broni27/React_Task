import React from 'react';
import headerClass from './Styles/header.module.css';
const MyHeader = () => {
    return (
        <>
            <header className={headerClass.header}>
                <div>
                    Logo
                </div>
                <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </header>
            <hr style={{ marginBottom: '10px' }} />
        </>
    );
};

export default MyHeader;