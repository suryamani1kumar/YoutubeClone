import './App.css';
import { Routes, Route } from 'react-router-dom'
import store from './redux/reducer'
import { Provider } from 'react-redux';
import Header from './component/Header';
import Youtubehomepage from './component/Youtubehomepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchVideo from './page/WatchVideo';
import SearchVideo from './page/SearchVideo';
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<Youtubehomepage />} />
            <Route path='/watchvideo' element={<WatchVideo />} />
            <Route path='/searchvideo' element={<SearchVideo />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App;
