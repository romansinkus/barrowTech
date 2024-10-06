import { Button } from '@mui/material';
import './ControlPanel.css';
import {Slider }from '@mui/material';
import { useState } from 'react';


function ControlPanel(props:any) {
  const [sliderValues, setSliderValues] = useState([50, 50, 50]);

  const handleSliderChange = (index: number) => (event: Event, newValue: number | number[]) => {
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = newValue as number; 
    setSliderValues(newSliderValues);
    if(index == 1){
      props.onMassChange(newSliderValues[index]);
    }
  };


  const handleSimulate = () => {
    console.log("Slider values:", sliderValues);

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
            <Slider defaultValue={0.5} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}}   min={0}
  max={1}step={0.01} onChange={handleSliderChange(0)} />
            <li>Gravel Mass (lbs)</li>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}} onChange={handleSliderChange(1)}/>

        </ul>
        <div className='simulate-button'>
          <Button variant="outlined" size='large' sx={{color: "black"}} onClick={handleSimulate}>SIMULATE</Button>

        </div>
    </div>
      
    </>
  )
}

export default ControlPanel
