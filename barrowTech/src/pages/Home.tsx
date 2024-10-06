import {useCallback, useState } from 'react';
import ControlPanel from "../components/ControlPanel";
import Grid from "../components/Grid";
import './Home.css'; 
import { Button } from '@mui/material';
import Wheelbarrow from '../components/three/Wheelbarrow';
import Wheelbarrow2 from '../components/three/Wheelbarrow2';

function Home() {
  const [showBarrow, setShowBarrow] = useState(true);
  const [panelVisible, setPanelVisible] = useState(false);
  const [barrowMass, setBarrowMass] = useState<number>();

  const barrowMassChange = useCallback((newMass:number) => {
    setBarrowMass(newMass);
    console.log(newMass);
  }, [setBarrowMass])

  const handleClick = () => {
    setPanelVisible(true);
    setTimeout(() => {
        setShowBarrow(false); 
    }, 500); 
  };
  const handleHome = () => {
    setPanelVisible(false);
    setTimeout(() => {
        setShowBarrow(true); 
    }, 500); 
  };

  return (
    <div style={{ height: '100vh', cursor: 'pointer' }}>
      <div className="home">
      {!showBarrow && <img src="home.svg" alt="Logo" className="svg-logo" onClick={handleHome} />}

      <Grid />
      {/* {!showBarrow && (
            <div className='home-screen'>

            </div>
        )}   */}
        {panelVisible && (
          <div className="control-panel">
            {(barrowMass ?? 0) > 70 && <img src='gravel.png' className={"gravel"} height={200} width={200} hidden={false}></img>}
            {(barrowMass ?? 0) > 35 && <img src='gravel.png' className={"gravel2"} height={200} width={200} hidden={false}></img>}
            <img src='gravel.png' className={"gravel3"} height={200} width={200}></img>
            <ControlPanel onMassChange={barrowMassChange}/>
            <Wheelbarrow2 />

          </div>
        )}


        {showBarrow && (
            
          <div className='prehome-screen'>
            
            <div className="logo-container">
                <div className='logo'>        
                        <h2>BarrowTech</h2>
                </div>
            </div>
            <Wheelbarrow />
            <div className="button-container">
                    
                <Button onClick={handleClick} variant="outlined" size='large' sx={{color: "#696969", width: '200px', height: '60px' }}  >START</Button>

            </div>
            {/* <Cube/> */}
          </div>

        )}
        
      </div>
    </div>
  );
}

export default Home;
