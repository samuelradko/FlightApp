import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import FlightScreen from './screen/FlightScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">SkyFlight</a>
        </header>
        <main>
          <Routes>
            <Route path='/flight/:slug' element={<FlightScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
     
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
