
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Homepage from './component/Homepage'
import Header from './component/Header';
import Youtubehomepage from './component/Youtubehomepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path='/' element={<Homepage/>}/> */}
        {/* <Route path='/' element={<Header/>}/> */}
        <Route path='/' element={<Youtubehomepage/>}/>
       

        

      </Routes>
    
      

    </div>
  )
}

export default App;
