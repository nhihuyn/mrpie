import React, { FunctionComponent, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import ShoppingCartSummary from "./shopping-cart-summary";

const CartDetail: FunctionComponent = () => {
  const { t } = useTranslation();
  const initialProducts = [
    { id: 1, name: "PIE TÁO",  price: 10000 },
    { id: 2, name: "PIE NHO",  price: 20000 },
    { id: 3, name: "PIE CAM",  price: 20000 },
    { id: 4, name: "PIE QUÝT", price: 30000 },
    { id: 5, name: "PIE HẤU",  price: 20000 },
    { id: 8, name: "PIE NÓNG", price: 20000 },
    { id: 9, name: "PIE LẠNH", price: 20000 },
    { id: 10, name: "PIE DÂU", price: 20000 },
    { id: 11, name: "PIE XOÀI",price: 20000 },
    { id: 12, name: "PIE ĐÀO", price: 20000 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [productCount, setProductCount] = useState(initialProducts.length);
  const [showCartEmptyAlert, setShowCartEmptyAlert] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleRemoveProduct = (productId: number) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    setProductCount(updatedProducts.length);
    if (updatedProducts.length === 0) {
        setTotalPrice(0);
      }
  };

  const handleCheckout = () => {
    if (products.length > 0) {
     
    } else {
      setShowCartEmptyAlert(true);
      setTimeout(() => {
        setShowCartEmptyAlert(false);
      }, 2000); 
    }
  };
 

  return (
    <div className="intro-container min-h-screen">
      <div className="breadcrumb-container bg-black text-sm text-white p-4">
        <p className="ml-4">{t('Cart')}</p>
      </div>

      <div className="title-container">
        <h1 className="mt-8 ml-10 text-2xl">{t('ShoppingCart')}</h1>
        <p className="mr-10 mt-10 text-right text-xl font-bold">{productCount} {t('Item')}</p>

        {products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 py-8 md:ml-10 md:mr-10 font-bold">
            <div className="hidden sm:block">
              <h2 >{t('DetailItems')}</h2>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-center">{t('Quantity')}</h2>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-center">{t('Price')}</h2>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-center">{t('TotalCart')}</h2>
            </div>
          </div>
        )}
        {products.length === 0 ? (
          <div className="empty-cart">
            <p className="mt-8 mb-4 ml-10 text-xl ">{t('EmptyCart')}</p>
            <p className="py-20 ml-10 mr-10 border-t-2 border-b-2"></p>

          </div>
        ) : (
          <ShoppingCartSummary 
            products={products} 
            onRemoveProduct={handleRemoveProduct} 
            updateTotalPrice={setTotalPrice}
          />
        )}
        <div className="flex justify-end test-xl mt-8 mb-4 ">
          <div className="ml-auto mr-4 md:mr-40 flex-col items-center">
            <p className="mb-2">{t('TempCart')}: {totalPrice.toLocaleString()} vnd</p>
            <p className="mb-2 font-bold">{t('TotalCart')}: {totalPrice.toLocaleString()} vnd</p>

            <motion.div
              initial={{ opacity: 0, x: 200 }} 
              animate={{ opacity: showCartEmptyAlert ? 1 : 0, x: showCartEmptyAlert ? 0 : 200 }} 
              exit={{ opacity: 0, x: 200 }} 
              transition={{ duration: 0.8 }} 
              className="fixed top-10 right-2 md:right-10 z-50"
            >
              {showCartEmptyAlert && (
                <Alert
                  message={
                    <span>
                      <ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')}{' '}
                    </span>
                  }
                  description={t('EmptyCart')}
                  type="error"
                  closable
                  onClose={() => setShowCartEmptyAlert(false)}
                />
              )}
            </motion.div>

            {products.length > 0 ? (
              <Link to="/checkout">
                <button onClick={handleCheckout} className="bg-red-500 text-white px-10 py-2 rounded-3xl">{t('Order')}</button>
              </Link>
            ) : (
              <button onClick={handleCheckout} className="bg-red-500 text-white px-10 py-2 rounded-3xl">{t('Order')}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
