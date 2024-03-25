import React from 'react';
import cl from './MyModal.module.css'
const MyModal = ({ cpu, gpu, price, visible, setVisible }) => {

    const rootClasses =[cl.myModal]
    if(visible){
        rootClasses.push(cl.active);

    }

    return (
            <div className={rootClasses.join(' ')}>
                <div className={cl.myModalContent}>
                    CPU: {cpu}
                    <br/>
                    GPU: {gpu}    
                    <br/>
                    Price: {price}
                </div>
            </div>
    );
};

export default MyModal;