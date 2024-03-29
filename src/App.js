

import "./App.css";
import DetailProduct from "./components/common/detail-product/detailProduct";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import Menu from "./components/common/menu/menu";
import Layout from "./components/Layout/layout";
import ChangePasswd from './components/common/ChangePasswd/ChangePasswd';
import Login from './components/common/Login/Login';
import ForgotPassword from './components/common/ForgotPasswd/ForgotPasswd';
import RegisterForm from "./components/common/register/register";
import Checkout from "./components/common/checkout/checkout";
import Mainpage from "./components/common/mainpage/mainpage";
import Header from "./components/common/header/header";

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<DetailProduct/>} />
            <Route path="/products/:productId" element={<Menu/>} />
            <Route path="/change_password" element={<ChangePasswd/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path="/mainpage" element={<Mainpage/>} />
          </Routes>
     </Layout>
    </Router>
   
    
    
  );
}

export default App;
