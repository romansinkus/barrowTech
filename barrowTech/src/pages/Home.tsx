import {useState } from 'react';
import ControlPanel from "../components/ControlPanel";
import Grid from "../components/Grid";
import Cube from "../components/three/Test";
import './Home.css'; 
import { Button } from '@mui/material';
import Wheelbarrow from '../components/three/Wheelbarrow';
import Wheelbarrow2 from '../components/three/Wheelbarrow2';

function Home() {
  const [showBarrow, setShowBarrow] = useState(true);
  const [panelVisible, setPanelVisible] = useState(false);

  const handleClick = () => {
    setPanelVisible(true);
    setTimeout(() => {
        setShowBarrow(false); 
    }, 500); 
  };

  return (
    <div onClick={handleClick} style={{ height: '100vh', cursor: 'pointer' }}>
      <div className="home">
        {panelVisible && (
          <div className="control-panel">
            <ControlPanel />
          </div>
        )}
        <Grid />

        {showBarrow && (
            
          <div className='prehome-screen'>
            
            <div className="button-container">
                
            <Button variant="outlined" size='large' sx={{color: "#696969", width: '200px', height: '60px' }}  >START</Button>

            </div>
            <Wheelbarrow />
            {/* <Cube/> */}
          </div>

        )}
        {!showBarrow && (
            <div className='prehome-screen'>

                <Wheelbarrow2 />
            </div>
        )}  
      </div>
    </div>
  );
}

export default Home;
