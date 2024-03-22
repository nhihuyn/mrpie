
import React, { useState } from 'react';
import { HeartOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Rate, Alert } from 'antd';
import veganImage from '../../../assets/images/vegan_thaicury.png';
import background from '../../../assets/images/background_vegan.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Detail: React.FC = () => {
  const { t } = useTranslation();

  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState<number | undefined>(0);

  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showReviewAlert, setShowReviewAlert] = useState(false);
  const [showReviewSuccessAlert, setShowReviewSuccessAlert] = useState(false);
  const [showFavoriteAlert, setShowFavoriteAlert] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [selectedSizes, setSelectedSizes] = useState<{[key: string]: boolean}>({
    S: false,
    M: false,
    L: false,
    J: false
  });

  const [userName, setUserName] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [reviewContent, setReviewContent] = useState(""); 

  const handleIncreaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleAddToFavorite = () => {
    setFavorite(true);
    setShowFavoriteAlert(true);
    setTimeout(() => {
      setShowFavoriteAlert(false);
    }, 2000);
  };
  
  const handleSizeSelect = (size: string) => {
    const newSelectedSizes = { S: false, M: false, L: false, J: false };
    newSelectedSizes[size] = true;
    setSelectedSize(size);
    setSelectedSizes(newSelectedSizes);
  };

  const handleAddToCart = () => {
    if (!selectedCategory || !selectedSize) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setShowSuccessAlert(true);
      setSelectedSizes({
        S: false,
        M: false,
        L: false,
        J: false
      });
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }
  };

  const handleReviewSubmit = () => {
    let reviewValid = true;

    // Kiểm tra tên người dùng
    if (!/^[\p{L}\s']+$/u.test(userName.trim()) || userName.trim().length < 2 || userName.trim().length > 64) {
      reviewValid = false;
    }

    // Kiểm tra số điện thoại
    if (!/^[0-9()+-]*$/.test(phoneNumber.trim()) || phoneNumber.trim().length < 10 || phoneNumber.trim().length > 11 || phoneNumber.trim().includes(" ")) {
      reviewValid = false;
    }

    // Kiểm tra nội dung đánh giá
    if (reviewContent.trim().length < 50) {
      reviewValid = false;
    }

    // Kiểm tra đánh giá
    if (!rating || rating === 0) {
      reviewValid = false;
    }

    if (!reviewValid) {
      setShowReviewAlert(true);
      setTimeout(() => {
        setShowReviewAlert(false);
      }, 2000);
    } else {
      setShowReviewSuccessAlert(true);
      setTimeout(() => {
        setShowReviewSuccessAlert(false);
      }, 2000);
      setUserName("");
      setPhoneNumber("");
      setReviewContent("");
      setRating(0);
    }
  };

  return (
    <div className="bg-orange-100 min-h-screen">
     {showAlert && (
  <motion.div
    initial={{ opacity: 0, x: 200 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: 200 }} 
    transition={{ duration: 0.8 }} 
    className="fixed top-10 right-2 md:right-10 z-50"
  >
    <Alert
      message={
        <span>
          <ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')}{' '}
        </span>
      }
      description={t('PleaseSelectCakeAndSize')}
      type="error"
      closable
      onClose={() => setShowAlert(false)}
    />
  </motion.div>
)}


{showSuccessAlert && (
  <motion.div
    initial={{ opacity: 0, x: 200 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: 200 }} 
    transition={{ duration: 0.8 }} 
    className="fixed top-10 right-2 md:right-10 z-50"
  >
    <Alert
      message={t('Success')}
      description={t('ProductAddedToCart')}
      type="success"
      closable
      showIcon
    />
  </motion.div>
)}


{showReviewAlert && (
  <motion.div
    initial={{ opacity: 0, x: 200 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: 200 }} 
    transition={{ duration: 0.8 }} 
    className="fixed top-10 right-2 md:right-10 z-50"
  >
    <Alert
      message={
        <span>
          <ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')}{' '}
        </span>
      }
      description={t('InvalidOrEmptyReviewInformation')}
      type="error"
      closable
      onClose={() => setShowReviewAlert(false)}
    />
  </motion.div>
)}


{showReviewSuccessAlert && (
  <motion.div
    initial={{ opacity: 0, x: 200 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: 200 }} 
    transition={{ duration: 0.8 }} 
    className="fixed top-10 right-2 md:right-10 z-50"
  >
    <Alert
      message={t('Success')}
      description={t('CommentHasBeenSubmitted')}
      type="success"
      closable
      showIcon
    />
  </motion.div>
)}


{showFavoriteAlert && (
  <motion.div
    initial={{ opacity: 0, x: 200 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: 200 }} 
    transition={{ duration: 0.8 }} 
    className="fixed top-10 right-2 md:right-10 z-50"
  >
    <Alert
      message={t('Success')}
      description={t('ProductAddedToFavorites')}
      type="success"
      closable
      showIcon
    />
  </motion.div>
)}

      <div className="bg-black text-white p-4">
        <p>{t('Home')} &gt; {t('Menu')} &gt; {t('ColdCakes')} &gt; <strong>Vegan Thai Cury</strong></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 justify-center items-center"  
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', minHeight: '100vh', position: 'relative' }}>
        
        <div className="w-full lg:ml-40 p-8 text-white justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Vegan Thai Cury</h1>
          <p className="text-sm mb-4">{t('ProductDescriptionShort')}</p>

          <div className="flex items-center mb-4">
            <p className="text-sm mr-2">{t('Phân loại')}:</p>
            <select 
              className="bg-gray-200 text-black p-2 px-6 rounded-md mr-4"
              onChange={(e) => setSelectedCategory(e.target.value)}
              >
              <option value="">{t('SelectCakeType')}</option>
              <option value="category1">{t('HotCakes')}</option>
              <option value="category2">{t('ColdCakes')}</option>
              </select>
              </div>

              <div className="flex items-center mb-4">
        <div className="border border-white flex ">
          <button onClick={handleDecreaseCount} className="p-2 px-4 hover:bg-red-400">-</button>
          <input type="text" className="p-2 w-16 border-1 text-center text-black" value={count} readOnly />
          <button onClick={handleIncreaseCount} className="p-2 px-4 hover:bg-red-400">+</button>
        </div>
        <HeartOutlined
          onClick={handleAddToFavorite}
          className={`h-10 w-10 ml-4 text-red-500 border-2 border-gray-400 hover:bg-red-200 bg-white rounded-full flex items-center justify-center cursor-pointer ${favorite ? 'fill-current' : ''}`}
        />
      </div>

      <div className="flex items-center mb-4">
        <p className="text-sm mr-2">{t('Size')}:</p>
        <div className="flex">
          <button 
            onClick={() => handleSizeSelect("S")} 
            className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-2 ${selectedSizes['S'] ? 'bg-red-400 text-white' : ''}`}
          >
            S
          </button>
          <button 
            onClick={() => handleSizeSelect("M")} 
            className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-2 ${selectedSizes['M'] ? 'bg-red-400 text-white' : ''}`}
          >
            M
          </button>
          <button 
            onClick={() => handleSizeSelect("L")} 
            className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-2 ${selectedSizes['L'] ? 'bg-red-400 text-white' : ''}`}
          >
            L
          </button>
          <button 
            onClick={() => handleSizeSelect("J")} 
            className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md ${selectedSizes['J'] ? 'bg-red-400 text-white' : ''}`}
            >
            J
          </button>
        </div>
      </div>

      <button onClick={handleAddToCart} className="bg-red-500 hover:bg-red-400 text-white px-4 py-4 rounded-md mt-4">{t('AddToCart')} &gt;</button>
    </div>

    <div className="w-full md:w-1/2 flex flex-col items-center md:ml-20 mt-4 md:mt-0 relative z-20">
      <img src={veganImage} alt="Bánh" className="w-3/5 md:w-auto" />
    </div>
  </div>

  <div>
    <div className="flex justify-start border-t border-gray-300 mt-8 ml-8">
      <button onClick={() => setActiveTab("description")} className={` ${activeTab === "description" ? "text-red-500 border-b-2 border-t-2  border-red-500" : "text-gray-500"}`}>{t('Description')}</button>
      <button onClick={() => setActiveTab("review")} className={`mx-6 ${activeTab === "review" ? "text-red-500 border-b-2 border-t-2 border-red-500" : "text-gray-500"}`}>{t('Reviews')}</button>
    </div>

    <div className="mt-8 ml-8 mr-8 min-h-8 ">
      {activeTab === "description" && (
        <>
          <h2 className="text-2xl font-bold mb-2">{t('ProductInformation')}</h2>
          <ul className="list-disc pl-4">
            <li>Vegan Thai Cury</li>
            <li>Cold Cakes</li>
            <li>Product Description Short</li>
          </ul>
        </>
      )}

{activeTab === "review" && (
  <>
    <h2 className="md:text-2xl mb-2">{t('AddYourComment')}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:col-span-2 mt-4 flex items-center mb-4">
        <p className="sm:text-sm mr-4 mb-2 md:mb-0">{t('YourRating')}:</p>
        <Rate allowHalf onChange={setRating} value={rating} className="mr-4" />
      </div>
      <div className="flex flex-col md:flex-row md:col-span-1 mb-4">
        <div className="mb-2 md:mr-4">
          <p className="text-sm mb-2">{t('Username')}</p>
          <input type="text" className="p-2 border border-gray-300 rounded-md w-full" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <p className="text-sm mb-2">{t('PhoneNumber')}</p>
          <input type="tel" className="p-2 border border-gray-300 rounded-md w-full" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
      </div>
      <div className="md:col-span-2">
        <p className="text-sm mt-4 mb-2">{t('ReviewContent')}</p>
        <textarea rows={4} className="p-6 border border-gray-300 rounded-md w-full" value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} />
      </div>
       <div className="md:col-span-2 mt-6 flex justify-center">
        <button onClick={handleReviewSubmit} className="bg-red-500 text-white px-4 py-2 mb-6 rounded-md">{t('SubmitComment')}</button>
       </div>
     </div>
    </>
  )}
    </div>
  </div>
</div>
);
};

export default Detail;
