
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import DaisyNavbar from './Components/DaisyNavbar/DaisyNavbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
import Counter from './Components/Counter/Counter'
import MouseHover from './Components/MouseHover/MouseHover'
import PasswordToggle from './Components/PasswordToggle'
import KeyPressExample from './Components/KeyPressExample'
import SearchExample from './Components/SearchExample'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      
      <Counter></Counter>
      <MouseHover></MouseHover>
      <SearchExample></SearchExample>
      <PasswordToggle></PasswordToggle>
      <KeyPressExample></KeyPressExample>
      <Phones></Phones>
    </>
  )
}

export default App
