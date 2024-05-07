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
    if(data === ''){
      setResult('Error');
    }
    else{
      setResult(eval(data));
    }
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
      <input value={data} className='display' type='text' readOnly></input>
      {result}
      <div className='container'>
        <div className='row'>
          <input type='button' onClick={handleChange} value='7' className='button'/>
          <input type='button' onClick={handleChange} value='8' className='button'/>
          <input type='button' onClick={handleChange} value='9' className='button'/>
          <input type='button' onClick={handleChange} value='+' className='button'/>
        </div>
        <div className='row'>
          <input type='button' onClick={handleChange} value='4' className='button'/>
          <input type='button' onClick={handleChange} value='5' className='button'/>
          <input type='button' onClick={handleChange} value='6' className='button'/>
          <input type='button' onClick={handleChange} value='-' className='button'/>
        </div>
        <div className='row'>
          <input type='button' onClick={handleChange} value='1' className='button'/>
          <input type='button' onClick={handleChange} value='2' className='button'/>
          <input type='button' onClick={handleChange} value='3' className='button'/>
          <input type='button' onClick={handleChange} value='*' className='button'/>  
        </div>
        <div className='row'>
          <input type='button' onClick={handleReset} value='C' className='button'/>
          <input type='button' onClick={handleChange} value='0' className='button'/>
          <input type='button' onClick={handleResult} value='=' className='button'/>
          <input type='button' onClick={handleChange} value='/' className='button'/>
        </div> 
      </div>
    </div>
  )
}

export default App
