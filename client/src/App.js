
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignupLogin from './pages/SignupLogin';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<SignupLogin />} />
        <Route path="/home" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
    </Router>
  );
}

export default App;