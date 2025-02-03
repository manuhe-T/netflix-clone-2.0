import { BrowserRouter, Routes, Route } from 'react-router';
import HomeScreen from './Screens/HomeScreen';
import './Styles/app.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
