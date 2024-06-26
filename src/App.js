import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./components/common/menu/menu";
import Layout from "./components/Layout/layout";
import ChangePasswd from "./components/common/change-password/change-password";
import Login from "./components/common/login/login";
import ForgotPassword from "./components/common/forgot-password/forgot-password";
import Intro from "./components/common/introduce/introduction";
import Event from "./components/common/event-menu/event";
import RegisterForm from "./components/common/register/register";
import Checkout from "./components/common/checkout/checkout";
import Mainpage from "./components/common/mainpage/main-page";
import DetailEvent from "./components/common/detail/detail";
import Promotion from "./components/common/promotion/promotion";
import CartDetail from "./components/common/cart/cart-detail";

import GuestInfo from "./components/common/guest-info/guest-info";

import Contact from "./components/common/contact/contact";
// import Event from "./components/common/event";
// import { QueryClientProvider } from '@tanstack/react-query';
// import { queryClient } from './react-query';
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/products/:productId" element={<Menu />} />
            <Route path="/change_password" element={<ChangePasswd />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot_password" element={<ForgotPassword/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/eventmenu" element={<Event/>} />
            <Route path="/aboutMe" element={<Intro/>} />
            <Route path="/detail/:productId" element={<DetailEvent/>} /> 
            <Route path="/mainpage" element={<Mainpage/>} />
            <Route path="/promotion" element={<Promotion/>} /> 
            <Route path="/menu" element={<Menu/>} /> 
            <Route path="/checkout" element={<Checkout/>} /> 

            {/* <Route path="/event" element={<Event/>} />  */}

            <Route path="/cart" element={<CartDetail/>} /> 

            <Route path="/guest_info" element={<GuestInfo/>}/>

            <Route path="/contact" element={<Contact/>} /> 

            <Route path="/cart" element={<CartDetail />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Layout>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
