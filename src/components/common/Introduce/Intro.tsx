import React, { useState, useEffect, } from 'react';
import { RightOutlined } from '@ant-design/icons';
import food from '../../../assets/images/food.png';
import cooperate from '../../../assets/images/cooperate.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Intro: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        const footerPosition = footerElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (footerPosition < windowHeight ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      
    };

    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const handleTabClick = (tab: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    });
  };
  const animateItem = (index: number, delay: number) => ({
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, type: 'tween', ease: 'easeInOut', delay },
  });

  return (

    <div className="intro-container bg-[#F2EBE6] min-h-screen">
      <div className="breadcrumb-container bg-black text-white p-4">
      
          <Link to="/mainpage" className="text-white hover:text-gray-300">
            {t('Home')}
          </Link>
          <RightOutlined className="text-sm" />
          <strong> 
            <Link to="/intro" className="text-white hover:text-gray-300">
              {t('Introduction')}
            </Link>
          </strong>
      </div>

      
      <div className="title-container">

        <h1 className="mt-8 ml-10 text-2xl">{t('INTRODUCTION')}</h1>
        <div className="tab-container flex justify-start mt-8 ml-8 text-base">

          <button onClick={() => handleTabClick("info")} className={`mx-4 ${activeTab === "info" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Info')}
          </button>
          <button onClick={() => handleTabClick("tab2")} className={`mx-4 ${activeTab === "tab2" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Tab2')}
          </button>
          <button onClick={() => setActiveTab("tab3")} className={`mx-4 ${activeTab === "tab3" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Tab3')}
          </button>
        </div>

        <div className="tab-content mt-8 ml-8 mr-8 ">
            
        {activeTab === "info" && (
          <motion.div
          initial={{ opacity: 0, x: isVisible ? 100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          >
             <div className="timeline-container" id="timeline">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-10 mx-auto p-2 text-black">
          {/* Right */}
          <div className="flex md:contents">
            <div className="col-start-6 col-end-7 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-20 -mt-20 rounded-full bg-white border-4 border-blue-500"></div>
            </div>
            <motion.div {...animateItem(1, 0.2)} className="flex md:contents">
              <div className="col-start-7 mt-1 col-end-10 px-2 rounded-xl mr-auto">
                <time className="mb-1 text-sm font-normal leading-none text-black">March 2022</time>
                <img src={food} alt="item2" className="w-full mb-2 mt-8 rounded-xl" />
                <p className="text-left w-full mb-8 whitespace-normal">{t('ItemDescription')}</p>
              </div>
            </motion.div>
          </div>

          {/* Left */}

          <div className="flex flex-row-reverse md:contents">
            <motion.div {...animateItem(2, window.innerWidth > 768 ? 0.4 : 0.5)} className="flex md:contents">
              <div className="col-start-3 col-end-6 p-2 rounded-xl lg:mt-14 mt-8">
                <time className="mb-1 md:mt-2 text-sm flex items-start md:justify-end leading-none text-black">
                  March 2023
                </time>
                <img src={food} alt="item2" className="w-full lg:mt-14 md:mt-10 mt-8 mb-2 rounded-xl" />
                <p className="text-left w-full mb-10 whitespace-normal">{t('ItemDescription')}</p>
              </div>
            </motion.div>

            <div className="col-start-6 col-end-7 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/3 xl:-mt-24 -mt-20 rounded-full bg-white border-4 border-blue-500"></div>
            </div>
          </div>

          {/* Right */}

          <div className="flex md:contents">
            <div className="col-start-6 col-end-7 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-20 -mt-20 rounded-full bg-white border-4 border-blue-500"></div>
            </div>
            <motion.div {...animateItem(3, 0.8)} className="flex md:contents">
              <div className="col-start-7 mt-1 col-end-10 px-2 rounded-xl mr-auto">
                <time className="mb-1 text-sm font-normal leading-none text-black">March 2022</time>
                <img src={food} alt="item2" className="w-full mb-2 mt-10 rounded-xl" />
                <p className="text-left w-full mb-8 whitespace-normal">{t('ItemDescription')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
      </motion.div>
            
          )}
         {activeTab === "tab2" && (
          <motion.div
          initial={{ opacity: 0, x: isVisible ? 100 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          >
           <div>
            <h3>Tab 3 Content</h3>
            <p>This is content for Tab 2.</p>
          </div>

         </motion.div>
        )}


          {activeTab === "tab3" && (
            <motion.div
              initial={{ opacity: 0, x: isVisible ? 100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3>Tab 3 Content</h3>
                <p>This is content for Tab 3.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <div id="footer" className="footer-container bottom-0 w-full bg-white flex justify-center overflow-hidden">
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: isVisible ? 0 : '100vw' }}
        transition={{ duration: 1, type: 'tween', ease: 'easeInOut' }}
        className="footer-images-container flex justify-center"
      >
        <div className="grid grid-cols-4 items-center justify-between mt-10 bg-white p-2">
          <motion.img
            src={cooperate}
            alt="image1"
            className="footer-image mx-auto h-1/2 "
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'tween', ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.img
            src={cooperate}
            alt="image2"
            className="footer-image mx-auto h-1/2"
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'tween', ease: 'easeInOut', delay: 0.6 }}
          />
          <motion.img
            src={cooperate}
            alt="image3"
            className="footer-image mx-auto h-1/2"
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'tween', ease: 'easeInOut', delay: 0.7 }}
          />
          <motion.img
            src={cooperate}
            alt="image4"
            className="footer-image mx-auto h-1/2"
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'tween', ease: 'easeInOut', delay: 0.8 }}
          />
          
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Intro;
