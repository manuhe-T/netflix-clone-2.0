import { BrowserRouter, Routes, Route } from 'react-router';
import HomeScreen from './Screens/HomeScreen';
import './Styles/app.css';
import LoginScreen from './Screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
