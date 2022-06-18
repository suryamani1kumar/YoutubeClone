
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import Header from './component/Header';
import Youtubehomepage from './component/Youtubehomepage';
import Second from './component/Second';
import { ContextProvider } from './context/GlobalContext';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Homepage/>}/> */}
          {/* <Route path='/' element={<Header/>}/> */}
          <Route path='/' element={<Youtubehomepage />} />
          <Route path='/second' element={<Second />} />




        </Routes>
      </ContextProvider>



    </div>
  )
}

export default App;
