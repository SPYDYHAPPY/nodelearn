import { Sitetopnav, Sitefooter } from './Layouts/Sitelayout'
import SpecialSale from './Components/SpecialPrice'
import About from './Components/about'
import './App.css'


function App() {

  return (
    <>
      <Sitetopnav />
      <div className="body-content">
        <SpecialSale />
      </div>
      <Sitefooter />
    </>
  )
}

export default App