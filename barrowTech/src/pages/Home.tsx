import {useState } from 'react';
import ControlPanel from "../components/ControlPanel";
import Grid from "../components/Grid";
import Cube from "../components/three/Test";
import './Home.css'; 

function Home() {
  const [showCube, setShowCube] = useState(true);
  const [panelVisible, setPanelVisible] = useState(false);

  const handleClick = () => {
    setPanelVisible(true);
    setTimeout(() => {
      setShowCube(false); 
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
        {!showCube ? <div className="cube-hidden" /> : <Cube />}
      </div>
    </div>
  );
}

export default Home;
