import Practice from './Practice';
function App() {
  const handleclick = (num) => alert('This is click' + num);
  let userInput = document.getElementById("inp".value); 
  console.log(userInput);

  const cha = () => console.log('function called');

  const up = (e) => {
    console.log(e.target.value);
  }

  const mouseEnter = ()=> {
console.log('Your Mouse is on h1');
  }


  const mouseLeft = ()=> {
    console.log('Your Mouse left from h1');
      }
    



  return (
    <>
          <Practice/>

    <div className="App">
      <h1 onMouseEnter={mouseEnter}        onMouseLeave={mouseLeft}
 >      This is app js file     </h1>

      <input type="text" name="inp" id="inp" onKeyUp={(e) => up(e)}   onChange={cha}


      />


      <button type="submit" onClick={() => handleclick(5)}>Submit</button>

      {/* <button type="submit" onclick=()>Submit</button> */}

    </div>
    </>

  );
}

export default App;
