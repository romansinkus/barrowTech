import { Button } from '@mui/material';
import './ControlPanel.css';
import {Slider }from '@mui/material';


function ControlPanel() {

  return (
    <>
    <div className="panel">
        <div className='header'>        
            <img src='logo.png' height={40} width={40}></img>
            <h2>BarrowTech</h2>
        </div>

        <ul>
            <li>slider 1</li>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}}/>
            <li>slider 2</li>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}}/>

            <li>slider 3</li>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{color: '#696969'}}/>

        </ul>
        <div className='simulate-button'>
          <Button variant="outlined" color="#696969">Simulate</Button>

        </div>
    </div>
      
    </>
  )
}

export default ControlPanel
