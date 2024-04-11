import React, { FunctionComponent, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Alert, Button, Modal } from 'antd';
import ShoppingCartSummary from "./ShoppingCartSummary";

const CartDetail: FunctionComponent = () => {
  const { t } = useTranslation();

  const initialProducts = [
    { id: 1, name: "PIE TÁO",  price: 10000 },
    { id: 2, name: "PIE MẬN",  price: 20000 },
    { id: 3, name: "PIE ĐÀO",  price: 30000 },
    { id: 4, name: "PIE CÓC",  price: 40000 },
    { id: 5, name: "PIE THƠM", price: 50000 },
  ];

  const [totalPrice, setTotalPrice] = useState(initialProducts.reduce((total, product) => total + product.price, 0));
  const [cartState, setCartState] = useState({
    products: initialProducts,
    productCount: initialProducts.length,
    showCartEmptyAlert: false,
    showConfirmModal: false
  });

  const handleRemoveProduct = (productId: number) => {
    const updatedProducts = cartState.products.filter(product => product.id !== productId);
    const totalPrice = updatedProducts.reduce((total, product) => total + product.price, 0);
    setCartState(prevState => ({
      ...prevState,
      products: updatedProducts,
      productCount: updatedProducts.length
    }));
    setTotalPrice(totalPrice);
  };

  const handleRemoveAllProducts = () => {
    setCartState(prevState => ({
      ...prevState,
      products: [],
      productCount: 0,
      showConfirmModal: false,
      showCartEmptyAlert: false
    }));
    setTotalPrice(0);
  };

  const handleCheckout = () => {
    if (cartState.products.length > 0) {
      // Proceed with checkout logic
    } else {
      setCartState(prevState => ({
        ...prevState,
        showCartEmptyAlert: true
      }));
      setTimeout(() => {
        setCartState(prevState => ({
          ...prevState,
          showCartEmptyAlert: false
        }));
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
  
        <div className="md:mr-10 justify-center mt-10 text-right text-xl font-bold flex items-center md:justify-end">
          <p className="mr-5">{cartState.productCount} {t('Item')}</p>
          <Button
            className="bg-red-500 text-white px-10 py-2 rounded-full leading-4"
            onClick={() => setCartState(prevState => ({ ...prevState, showConfirmModal: true }))}
            hidden={cartState.products.length === 0} 
          >
            {t('DeleteAll')}
          </Button>
        </div>
  
        <Modal
          title={t('Notification')}
          visible={cartState.showConfirmModal}
          onCancel={() => setCartState(prevState => ({ ...prevState, showConfirmModal: false }))}
          footer={[
            <Button key="cancel" onClick={() => setCartState(prevState => ({ ...prevState, showConfirmModal: false }))}>
              {t('Cancel')}
            </Button>,
            <Button key="confirm" type="primary" danger onClick={handleRemoveAllProducts}>
              {t('Confirm')}
            </Button>,
          ]}
        >
          <p>{t('ConfirmDeleteAll')}</p>
        </Modal>
  
        {cartState.products.length > 0 && (
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
  
        {cartState.products.length === 0 ? (
          <div className="empty-cart">
            <p className="mt-8 mb-4 ml-10 text-xl ">{t('EmptyCart')}</p>
            <p className="py-20 ml-10 mr-10 border-t-2 border-b-2"></p>
          </div>
        ) : (
          <ShoppingCartSummary 
            products={cartState.products} 
            onRemoveProduct={handleRemoveProduct} 
            updateTotalPrice={setTotalPrice}
          />
        )}
  
        <div className="flex justify-center md:justify-end test-xl mt-8 mb-4 ">
        <div className="mr-4 md:mr-40 flex-col items-center">
  <p className="mb-2 text-center md:text-left">{t('TempCart')}: {totalPrice.toLocaleString()} vnd</p>
  <p className="mb-2 font-bold text-center md:text-left">{t('TotalCart')}: {totalPrice.toLocaleString()} vnd</p>
  
            <motion.div
              initial={{ opacity: 0, x: 200 }} 
              animate={{ opacity: cartState.showCartEmptyAlert ? 1 : 0, x: cartState.showCartEmptyAlert ? 0 : 200 }} 
              exit={{ opacity: 0, x: 200 }} 
              transition={{ duration: 0.8 }} 
              className="fixed top-10 right-2 md:right-10 z-50"
            >
              {cartState.showCartEmptyAlert && (
                <Alert
                  message={
                    <span>
                      <ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')}{' '}
                    </span>
                  }
                  description={t('EmptyCart')}
                  type="error"
                  closable
                  onClose={() => setCartState(prevState => ({ ...prevState, showCartEmptyAlert: false }))}
                />
              )}
            </motion.div>
  
            {cartState.products.length > 0 ? (
              <Link to="/checkout">
                <Button 
                  onClick={handleCheckout} 
                  className="bg-red-500 text-white px-10 py-2 rounded-full leading-4"
                >
                  {t('Order')}
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={handleCheckout} 
                className="bg-red-500 text-white px-10 py-2 rounded-full leading-4"
              >
                {t('Order')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
    
};

export default CartDetail;
