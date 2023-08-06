// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Detail from './Components/Detail';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Product from './Components/Product';
import Newaccount from './Components/login-compt/Newaccount';
import Passwordforget from './Components/login-compt/Passwordforget';
import Footer from './Components/Footer';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
      <Navbar/>   
        <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='/Product'element={<Product/>}>Collections</Route>
        <Route exact path='/Detail' element={<Detail/>}>About</Route>
        <Route exact path='/Contact' element={<Contact/>}>Contact</Route>
        
        <Route exact path='/Checkout' element={<Checkout/>}>Cart</Route>
        <Route exact path='/Login' element={<Login/>}>Login</Route>
        {/* login-Routes */}
        <Route exact path='/NewAccount'element={<Newaccount/>}>Register</Route>
        <Route exact path='/PasswordForget' element={<Passwordforget/>}>Forget</Route>
        </Routes>
        <Footer/>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
