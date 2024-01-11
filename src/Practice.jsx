import React from 'react'

function practice() {
    const addTwoNumber = () => {
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        // let add = num1 + num2;
        let add = parseInt(num1) + parseInt(num2);
        console.log('Addition =  '+add)

    }
  return (
    <div>
        <h1>Add 2 numbers</h1>

        <label htmlFor="inp">Enter Number 1:</label>
      <input type="text" name="num1" id="num1" />
      <br /><br />

      <label htmlFor="inp">Enter number 2:</label>
      <input type="text" name="num2" id="num2"/>
<br /> <br />
      <button onClick={()=>addTwoNumber()}>ADD</button>
    </div>
  )
}

export default practice
