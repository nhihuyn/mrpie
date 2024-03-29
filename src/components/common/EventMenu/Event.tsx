import React, { useState, useEffect } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Event from '../menu/Event';
import { motion } from 'framer-motion';
import food from '../../../assets/images/food.png';
import image1 from '../../../assets/images/bakery1.png';

const Eventmenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("event");
  const [isVisible, setIsVisible] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState("AllEvent");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleTabClick = (tab: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    });
  };

  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
  };

  return (
    <div className="intro-container min-h-screen">
      <div className="breadcrumb-container bg-black text-white p-4">
        <p>{t('Home')} <RightOutlined className="text-sm" /> <strong> {t('Event')} </strong></p>
      </div>

      <div className="title-container relative">
        <h1 className="mt-8 ml-10 font-bold">{t('EVENT')}</h1>
        <div className="tab-container flex justify-start mt-8 ml-8">
          <button onClick={() => handleTabClick("event")} className={`mx-3 ${activeTab === "event" ? "text-black border-b-4 border-black" : "text-gray-500 rounded"}`}>
            {t('Event')}
          </button>
          <button onClick={() => handleTabClick("tab2")} className={`mx-3 ${activeTab === "tab2" ? "text-black border-b-4 border-black" : "text-gray-500 rounded"}`}>
            {t('NewStore')}
          </button>
        </div>

        <div className="tab-content mt-8 ml-8 mr-8 relative">
          {activeTab === "event" && (
            <>
              <div className="subtab-container absolute top-0 sm:right-0 mr-10 sm:-mt-20 flex ">
                <button onClick={() => handleSubTabClick("all")} className={`mx-3 ${activeSubTab === "all" ? "text-red-500 border-b-2 border-red-500 font-bold" : "text-gray-500"}`}>
                  {t('AllEvent')}
                </button>
                <button onClick={() => handleSubTabClick("ongoing")} className={`mx-3 ${activeSubTab === "ongoing" ? "text-red-500 border-b-2 border-red-500 font-bold " : "text-gray-500"}`}>
                  {t('OngoingEvent')}
                </button>
                <button onClick={() => handleSubTabClick("ended")} className={`mx-3 ${activeSubTab === "ended" ? "text-red-500 border-b-2 border-red-500 font-bold " : "text-gray-500"}`}>
                  {t('EndedEvent')}
                </button>
              </div>

            {activeSubTab === "ongoing" && (
            <div className="grid items-center md:ml-14 lg:ml-24 ml-4 mb-6">
                <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8  grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                >
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                <Event image={food} size="small" IsEvent = {true} />
                
                
                </motion.div>
            </div>
            )}

            </>
          )}

          {activeTab === "tab2" && (
            <div className="grid items-center md:ml-14 lg:ml-24 ml-4 mb-6 ">
                <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                >
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              <Event image={food} size="small" IsStore = {true} location='Hai Bà Trưng, Quận 1,TP.HCM'/>
              </motion.div>
            </div>
         
          )}
        </div>

        {showScrollButton && (
          <div className="fixed bottom-0 left-0 right-0 mx-auto">
            <div className="flex justify-center mt-8 mb-4">
              <button onClick={scrollToBottom} className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-xl">
                <DownOutlined />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Eventmenu;
