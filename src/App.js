import { Routes, Route } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux';
import Header from './component/Header/Header';
import Youtubehomepage from './page/homepage/Youtubehomepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchVideo from './page/watchvideo/WatchVideo';
import SearchVideo from './page/searchvideo/SearchVideo';
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme';
import ShortVideo from './page/shortvideo/ShortVideo';



function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<Youtubehomepage />} />
            <Route path='/watchvideo' element={<WatchVideo />} />
            <Route path='/searchvideo' element={<SearchVideo />} />
            <Route path='/shortvideo' element={<ShortVideo />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App;
