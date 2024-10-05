import './ControlPanel.css';

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
            <li>slider 2</li>
            <li>slider 3</li>
        </ul>
    </div>
      
    </>
  )
}

export default ControlPanel
