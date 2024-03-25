import React, { useEffect, useState } from "react";
import MyHeader from "./MyHeader";
import MyBlock from "./MyBlock";
import MyBlocks from "./Styles/MyBlocks.module.css";
import MyButtonCss from "./Button/MyButton.module.css"
import MyModal from "./MyModal.jsx";
function App() {
  const cpus = [
    { id: 1, title: 'i5-13600K', body: 'CPU', price: 349, currency: 'USD' },
    { id: 2, title: 'i5-14600KF', body: 'CPU', price: 532, currency: 'USD' },
    { id: 3, title: 'i7-14700K', body: 'CPU', price: 418, currency: 'USD' }
  ]
  const gpus = [
    { id: 1, title: 'RTX 3060 TI', body: 'GPU', price: 361, currency: 'USD' },
    { id: 2, title: 'RTX 4080', body: 'GPU', price: 1451, currency: 'USD' },
    { id: 3, title: 'RTX 4090', body: 'GPU', price: 1756, currency: 'USD' }
  ]
  const [setup, setSetup] = useState([])
  const [modal, setModal] = useState(false);

  const addNewSetup = (e) => {
    const newSetup = {
      id: Date.now(),
      chosenCpu: cpus[num1].title,
      chosenGpu: gpus[num2].title,
      price: price
    }
    setSetup([...setup, newSetup])
    console.log(setup)
    console.log(num1)
    console.log(num2)
    console.log(cpus[num1].title)
    console.log(gpus[num2].title)

  }


  const updateData = (value) => {
    this.setState({ name: value })
  }
  /* Связывание с дочерним и получение данных */
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const price = cpus[num1].price + gpus[num2].price;
  
  useEffect(() => {
    addNewSetup();
  }, [])

  return (
    <div className="App">


      <MyHeader />
      <div className={MyBlocks.block}>
        <MyBlock arr={cpus} setNum={setNum1} />
        <MyBlock arr={gpus} setNum={setNum2} />
      </div>

      <div className={MyButtonCss.buy}>
        <div >
          Price: {price}
        </div>
        <br />
        <button onClick={addNewSetup}> buy </button>
      </div>
      <MyModal cpu={cpus[num1].title} gpu={gpus[num2].title} price={price} visible={modal} setVisible={setModal} />

    </div>

  );
}
{/*() => setModal(true)*/ }
export default App;
