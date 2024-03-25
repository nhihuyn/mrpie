
import "./App.css";
import DetailProduct from "./components/common/detail-product/detailProduct";
import { Route, BrowserRouter as Router , Routes} from "react-router-dom";
import Menu from "./components/common/menu/menu";
import Layout from "./components/Layout/layout";
import ChangePasswd from './components/common/ChangePasswd/ChangePasswd';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/" element={<DetailProduct/>} />
            <Route path="/products/:productId" element={<Menu/>} />
            <Route path="/change_password" element={<ChangePasswd/>} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
