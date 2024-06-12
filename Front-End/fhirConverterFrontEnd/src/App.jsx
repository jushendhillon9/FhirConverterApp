import csvLogo from './assets/CSV-icon.png'
import fhirLogo from './assets/Fhir-Icon.png'
import jsonLogo from './assets/JSON-Icon.png'
import arrow from './assets/Arrow.webp'
import DragAndDrop from './components/DragAndDrop'
import './App.css'

function App() {
  return (
    <>
      <nav className = "navbar">
        <div className = "navbarText">FhirConverter App</div>
        <div className = "linebreak"></div>
        <div className = "conversionExplained">Convert your CSV/JSON File to FHIR 🔥</div>
        <div className = "linebreak"></div>
        <div className = "model">Model: </div>
      </nav>
      <div className = "wrapper">
        <div className = "convertee">
          <img src={csvLogo} className="logo" alt="CSV logo" />
          <p id = "ampersand">&</p>
          <img src={jsonLogo} className="logo" alt="JSON logo" />
        </div>
        <div className = "arrowExplained">
          <img src={arrow} className="arrow"/>
        </div>
        <img src={fhirLogo} className="logo react" alt="FHIR logo" />
      </div>
      <DragAndDrop/>
    </>
  )
}

export default App
