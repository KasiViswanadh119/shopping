import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
