
import "./App.css";
import DetailProduct from "./components/common/detail-product/detailProduct";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import Menu from "./components/common/menu/menu";
import Layout from "./components/Layout/layout";
import ChangePasswd from './components/common/ChangePasswd/ChangePasswd';
import Login from './components/common/Login/Login';
import ForgotPassword from './components/common/ForgotPasswd/ForgotPasswd';
import Intro from "./components/common/Introduce/Intro";
import Event from "./components/common/EventMenu/Event";
import RegisterForm from "./components/common/register/register";
import Checkout from "./components/common/checkout/checkout";
import Mainpage from "./components/common/mainpage/mainpage";
import Header from "./components/common/header/header";
import DetailEvent from './components/common/Detail/Detail';
import Promotion from "./components/common/Promotion/promotion";

import CartDetail from "./components/common/P10/CartDetail"


function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<Mainpage/>} />
            <Route path="/products/:productId" element={<Menu/>} />
            <Route path="/change_password" element={<ChangePasswd/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/eventmenu" element={<Event/>} />
            <Route path="/contact" element={<Intro/>} />
            <Route path="/detail" element={<DetailEvent/>} /> 
            <Route path="/mainpage" element={<Mainpage/>} />
            <Route path="/promotion" element={<Promotion/>} /> 
            <Route path="/menu" element={<Menu/>} /> 
            <Route path="/checkout" element={<Checkout/>} /> 
            <Route path="/event" element={<Event/>} /> 
            <Route path="/cart" element={<CartDetail/>} /> 
          </Routes>
     </Layout>
    </Router>
  );
}

export default App;