import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

function App() {
  const location = useLocation();
  return (
    <div
      className={ `min-h-screen 
      ${location.pathname === '/' ? 'bg-gray-950' : 'bg-gray-700'}
     text-white flex flex-col` }
    >
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Login /> } />
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/edit" element={ <ProfileEdit /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
