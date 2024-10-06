import { Button } from '@mui/material';
import './ControlPanel.css';
import {Slider }from '@mui/material';
import { useState } from 'react';
import { testRunMatlab } from '../api';


function ControlPanel(props:any) {
  const [sliderValues, setSliderValues] = useState([0.1, 50]);
  const [simulationResult, setSimulationResult] = useState(null);

  const handleSliderChange = (index: number) => (event: Event, newValue: number | number[]) => {
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = newValue as number; 
    setSliderValues(newSliderValues);
    if(index == 1){
      props.onMassChange(newSliderValues[index]);
    }
  };


  async function handleSimulate (inputParam1: number, inputParam2: number) {
    console.log("Slider values:", sliderValues);
    console.log(inputParam1);
    console.log(inputParam2);
    const result = await testRunMatlab(inputParam1, inputParam2);
    setSimulationResult(result)
  };

  return (
    
    <>
    <div className="panel">
        <div className='header'>        
            <img src='logo.png' height={40} width={40}></img>
            <h2>BarrowTech</h2>
        </div>

        <ul>
            <li>Lifting Height (m)</li>
            <Slider marks={[{value: 0, label: 0},{value: 0.2, label: 0.2}]} defaultValue={0.1} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}}  min={0}
  max={0.2}step={0.001} onChange={handleSliderChange(0)} />
            <li>Gravel Mass (lbs)</li>
            <Slider marks={[{value: 50, label: 50},{value: 120, label: 120}]} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}} onChange={handleSliderChange(1)} min={50} max={120}/>

        </ul>
        <div className='simulate-button'>
          <Button variant="outlined" size='large' sx={{color: "black"}} onClick={() => handleSimulate(sliderValues[0], sliderValues[1])}>SIMULATE</Button>

        </div>
        {simulationResult && (<>

          <div className="result">
            <h3>Simulation Result:</h3>
            <p>{simulationResult}</p>
          </div>
          <div className='result-screen'>
              Place load {simulationResult} metres past fulcrum.
          </div>
          </>
        )}
    </div>
      
    </>
  )
}

export default ControlPanel