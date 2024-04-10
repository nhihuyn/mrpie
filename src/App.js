
import "./App.css";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import Menu from "./components/common/menu/menu";
import Layout from "./components/Layout/layout";
import ChangePasswd from './components/common/change-passwd/change-passwd';
import Login from './components/common/login/login';
import ForgotPassword from './components/common/forgot-passwd/forgot-passwd';
import Intro from "./components/common/introduce/introduction";
import EventMenu from "./components/common/event-menu/event";
import RegisterForm from "./components/common/register/register";
import Checkout from "./components/common/checkout/checkout";
import Mainpage from "./components/common/mainpage/main-page";
import DetailEvent from './components/common/detail/Detail';
import Promotion from "./components/common/promotion/promotion";
import CartDetail from "./components/common/cart-detail/cart-detail";
import GuestInfo from "./components/common/guest-info/guest-info";


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
            <Route path="/eventmenu" element={<EventMenu/>} />
            <Route path="/aboutMe" element={<Intro/>} />
            <Route path="/detail/:productId" element={<DetailEvent/>} /> 
            <Route path="/mainpage" element={<Mainpage/>} />
            <Route path="/promotion" element={<Promotion/>} /> 
            <Route path="/menu" element={<Menu/>} /> 
            <Route path="/checkout" element={<Checkout/>} /> 
            {/* <Route path="/event" element={<Event/>} />  */}
            <Route path="/cart" element={<CartDetail/>} /> 
            <Route path="/guest_info" element={<GuestInfo/>}/>
          </Routes>
     </Layout>
    </Router>
  );
}

export default App;