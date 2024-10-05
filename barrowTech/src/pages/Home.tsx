import ControlPanel from "../components/ControlPanel"
import Grid from "../components/Grid"

function Home() {

  return (
    <>
    <div>
        <ControlPanel/>
        <Grid rows={10} columns = {10}/>
    </div>
      
    </>
  )
}

export default Home
