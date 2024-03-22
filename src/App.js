import './App.css';
import DetailProduct from './components/common/detail-product/detailProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import Header from './components/common/header/header';
// import Footer from './components/common/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DetailProduct />}>
        <Route index element={<DetailProduct />} />
        <Route path="blogs" element={<DetailProduct />} />
        <Route path="contact" element={<DetailProduct />} />
        <Route path="*" element={<DetailProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
