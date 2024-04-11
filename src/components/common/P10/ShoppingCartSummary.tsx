import React, { FunctionComponent, useState, useEffect } from "react";
import food from '../../../assets/images/food.png';
import { useTranslation } from 'react-i18next';
import { Pagination } from "antd";
import './cart.css';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product[];
  onRemoveProduct: (productId: number) => void; 
  updateTotalPrice: (totalPrice: number) => void; 
}

const ShoppingCartSummary: FunctionComponent<Props> = ({ products, onRemoveProduct, updateTotalPrice }) => {
  
  const initialCounts = products.reduce((counts, product) => {
    counts[product.id] = 1;
    return counts;
  }, {});

  const [counts, setCounts] = useState<{ [key: number]: number }>(initialCounts);
  const backgroundColors = ["bg-blue-50", "bg-yellow-50"];

  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 2;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleIncreaseCount = (productId: number) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1
    }));
  };

  const handleDecreaseCount = (productId: number) => {
    if (counts[productId] && counts[productId] > 1) {
      setCounts(prevCounts => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1
      }));
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    if (products.length > 0) {
      totalPrice = products.reduce((total, product) => total + (product.price * (counts[product.id] || product.quantity)), 0);
    }
    updateTotalPrice(totalPrice); 
  }, [products, counts, updateTotalPrice]);


  const handleRemoveProduct = (productId: number) => {
    onRemoveProduct(productId);
    const updatedProducts = products.filter(product => product.id !== productId);
    const newTotalPages = Math.ceil(updatedProducts.length / productsPerPage);
    if (updatedProducts.length === 0) {
      setCurrentPage(1);  
    } else if (newTotalPages < totalPages && currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);   
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <div className="shopping-cart-summary relative">
      <div className="product-details ">
      {currentProducts.map((product, index) => (
              <div key={product.id} 
                  className={`product-item items-center grid grid-cols-2 md:grid-cols-4 md:ml-10 md:mr-10 py-10 border-b font-bold border-gray-200
                             ${backgroundColors[index % backgroundColors.length]}`}>
              
                <div className="product-info flex items-center">
                  <img src={food} alt={product.name} className="w-1/3 h-1/3 mr-2 " />
                  <div  >
                    <p className=" lg:mb-3 test-base">{product.name}</p>
                    <p className=" lg:mb-3 test-base">{t('CakeType')}</p>
                    <button onClick={() => handleRemoveProduct(product.id)} 
                    className="text-red-500 hover:text-red-200 ">{t('Delete')}</button>
                  </div>
                </div>

                <div className="flex justify-center mb-2 rounded-3xl">
                  <button onClick={() => handleDecreaseCount(product.id)} 
                   className="p-2 bg-red-400 hover:bg-red-200 rounded-l-full text-white block w-8">-</button>

                  <input type="text" className="w-10 bg-red-400 border-2 border-red-800 text-center text-white"
                   value={counts[product.id] || 1} readOnly />

                  <button onClick={() => handleIncreaseCount(product.id)} 
                  className="p-2 bg-red-400 hover:bg-red-200 rounded-r-full text-white block w-8">+</button>
                </div>
                
                <p className=" text right md:text-center mb-2 mobile-hidden">{product.price.toLocaleString()} vnd</p>
                <p className="text-center mb-2 mobile-hidden">{(product.price * (counts[product.id] || 1)).toLocaleString()} vnd</p>
                

                <div className="text-right col-span-2 md:text-center md:col-span-1 mr-4">
                {/*Ở màn hình mobile thì sẽ hiển thị thêm nội dung*/}
                <p className=" desktop-hidden">{t('Price')}: {product.price.toLocaleString()} vnd</p>
                <p className=" desktop-hidden">{t('TotalCart')}: {(product.price * (counts[product.id] || 1)).toLocaleString()} vnd</p>
              </div>
            </div>
            ))}

         <div className="flex justify-center md:justify-end mb-4 md:mr-20 mt-10">
         <Pagination
            current={currentPage}
            total={products.length}
            pageSize={productsPerPage}
            onChange={handlePageChange}
          />
         </div>
        </div>

        
      </div>
  );
};

export default ShoppingCartSummary;
