import React, { useEffect, useState } from 'react';
import cl from './Styles/MyBlock.module.css';
const MyBlock = ({ arr, setNum /* Связка с родителем */ }) => {

    const [curent, setCurent] = useState(0)
    const increment = () => {
        setCurent(curent + 1)

    }
    const decrement = () => {
        setCurent(curent - 1)

    }

    /* Передача в родителя */
    setNum(curent);

    return (
        <div className={cl.block}>
            <h3>
                {arr[curent].title}
            </h3>
            <p>
                {arr[curent].body}
            </p>
            <h5>
                {arr[curent].price} {arr[curent].currency}
            </h5>
            <div className={cl.arrows}>
                <button onClick={decrement} disabled={curent === 0}>
                    <i class="fa-solid fa-arrow-left" ></i>
                </button>
                <button onClick={increment} disabled={curent === arr.length - 1}>
                    <i class="fa-solid fa-arrow-right" onClick={decrement}></i>
                </button>
            </div>
        </div>
    );
};

export default MyBlock;