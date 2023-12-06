import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
