
import './App.css';
import FlowChart from './components/FlowChart/FlowChart';
import NavBar from './components/NavBar/NavBar';
import Phones from './components/Phones/Phones';
import PriceOptions from './components/PriceOptions/PriceOptions';
// import DaisyNav from './components/DaisyNav/DaisyNav';


function App() {


  return (
    <>
    <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl font-bold bg-orange-400'>Vite + React</h1>
     <PriceOptions></PriceOptions>
    <FlowChart></FlowChart>
    <Phones></Phones>
    </>
  )
}

export default App
