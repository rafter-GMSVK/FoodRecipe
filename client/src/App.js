import Spline from '@splinetool/react-spline';

import './App.css';



function App() {

    const working = ()=>{
      console.log("It is workoing?");
    }



  return (
    <div className="App">

        <h1 >Recipes</h1>

        <Spline className ="spline"scene="https://prod.spline.design/DzC5cf2mEGqIW2r1/scene.splinecode" />


      

        <div className="content">

          <div className="input">

          <input type="text" placeholder='Enter the name of the recipe...'></input>
          <button onClick={working}>Find my Recipe</button>


          </div>
          

        </div>
  

      
    </div>
  );
}

export default App;
