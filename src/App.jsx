import { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState('');
  const [result,setResult] = useState('');


  const handleChange = (e) =>{
    e.preventDefault();
    const {value} = e.target;
    setData((prev)=>(prev)+(value));
  }

  const handleResult = () =>{
    setResult(eval(data));
  }

  const handleReset=()=>{
    setData('');
    setResult('');
  }

  return (
    <div className='calculator'>
      <h3>
        React Calculator
      </h3>
      <input value={data} className='display'></input>
      {result}
      <div className='container'>
        <div className='row'>
          <button onClick={handleChange} value='7' className='button'>7</button>
          <button onClick={handleChange} value='8' className='button'>8</button>
          <button onClick={handleChange} value='9' className='button'>9</button>
          <button onClick={handleChange} value='+' className='button'>+</button>
        </div>
        <div className='row'>
          <button onClick={handleChange} value='4' className='button'>4</button>
          <button onClick={handleChange} value='5' className='button'>5</button>
          <button onClick={handleChange} value='6' className='button'>6</button>
          <button onClick={handleChange} value='-' className='button'>-</button>
        </div>
        <div className='row'>
          <button onClick={handleChange} value='1' className='button'>1</button>
          <button onClick={handleChange} value='2' className='button'>2</button>
          <button onClick={handleChange} value='3' className='button'>3</button>
          <button onClick={handleChange} value='*' className='button'>*</button>  
        </div>
        <div className='row'>
          <button onClick={handleReset} value='C' className='button'>C</button>
          <button onClick={handleChange} value='0' className='button'>0</button>
          <button onClick={handleResult} value='=' className='button'>=</button>
          <button onClick={handleChange} value='/' className='button'>/</button>
        </div> 
      </div>
    </div>
  )
}

export default App
