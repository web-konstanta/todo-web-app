import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './App.css';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;