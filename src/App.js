import './App.css';
import { Routes, Route } from 'react-router-dom'
import store from './redux/reducer'
import { Provider } from 'react-redux';
import Header from './component/Header';
import Youtubehomepage from './component/Youtubehomepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchVideo from './page/WatchVideo';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Youtubehomepage />} />
          <Route path='/watchvideo' element={<WatchVideo />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App;
