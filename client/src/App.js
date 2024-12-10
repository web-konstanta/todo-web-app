import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import AppRouter from './AppRouter';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;