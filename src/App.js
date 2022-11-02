
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
// import Login from './Login/Login';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/products'
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          } />
        <Route
          path='/orders'
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          } />
      </Routes>
    </div>
  );
}

export default App;
