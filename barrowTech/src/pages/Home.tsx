import ControlPanel from "../components/ControlPanel"
import Grid from "../components/Grid"
import Cube from "../components/three/Test"

function Home() {

  return (
    <>
    <div>
        <ControlPanel/>
        <Grid rows={10} columns = {10}/>
        <Cube/>
    </div>
      
    </>
  )
}

export default Home
