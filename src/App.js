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
import Intro from './components/common/Introduce/Intro';
import DetailEvent from './components/common/Detail/Detail';
import Event from "./components/common/event/Event";
import Contact from "./components/common/contact/Contact";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route element={<AuthLayout />}>
//           <Route element={<RrotectedLayout />}>
//               <Route path="/" element={<MainLayout />}>
//                   <Route index element={<Navigate to="/dashboard" />} />
//                   <Route path="dashboard" element={<Dashboard />} />
//                   <Route path="projects" element={<Projects />} />
//                   <Route path="users" element={<Users />} />
//                   <Route path="notifications" element={<Notification />} />
//                   <Route path="settings" element={<Settings />} />
//                   <Route
//                       path="*"
//                       element={<Navigate to="/dashboard" replace={true} />}
//                   />
//               </Route>
//           </Route>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//       </Route>,
//   ),
//   {},
// )

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
            {/* <Route path="/contact" element={<Intro/>} /> */}
            <Route path="/detail" element={<DetailEvent/>} /> 
            <Route path="/menu" element={<Menu/>} /> 
            <Route path="/checkout" element={<Checkout/>} /> 
            <Route path="/event" element={<Event/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
          </Routes>
     </Layout>
    </Router>
  );
}

export default App;