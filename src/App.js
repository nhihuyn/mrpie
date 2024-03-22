import './App.css';
// import Login from './components/Login/login';
import DetailProduct from './components/common/detail-product/detailProduct';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        {/* <Root /> */}
        <Footer />
      </div>
    ),
    errorElement: <div>Error</div>,
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  {
    path: '/products/:productId',
    element: <DetailProduct />,
  },
])

function App() {
  return (
    // <Provider store={store}>
      <RouterProvider router={router} />
    // </Provider>
  );
}

export default App;
