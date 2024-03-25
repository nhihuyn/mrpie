import React, { useState, useEffect, useRef } from 'react';
import { Breadcrumb, Timeline } from 'antd';
import food from '../../../assets/images/food.png';
import cooperate from '../../../assets/images/cooperate.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (tab: string) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(tab);
      setIsVisible(true);
    });
  };

  return (
    <div className="intro-container bg-orange-100 min-h-screen">
      <div className="breadcrumb-container bg-black text-white p-4">
        <Breadcrumb separator={<span className="text-white">&nbsp;&gt;&nbsp;</span>} className="breadcrumb">
          <Breadcrumb.Item className="text-white text-1xl">{t('Home')}</Breadcrumb.Item>
          <Breadcrumb.Item className="text-white font-bold text-1xl">{t('Introduction')}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="title-container">
        <h1 className="mt-8 ml-10">{t('INTRODUCTION')}</h1>
        <div className="tab-container flex justify-start mt-8 ml-8">
          <button onClick={() => handleTabClick("info")} className={`mx-4 ${activeTab === "info" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Info')}
          </button>
          <button onClick={() => handleTabClick("tab2")} className={`mx-4 ${activeTab === "tab2" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Tab2')}
          </button>
          <button onClick={() => handleTabClick("tab3")} className={`mx-4 ${activeTab === "tab3" ? "text-black border-b-2 border-black" : "text-gray-500"}`}>
            {t('Tab3')}
          </button>
        </div>
        <hr className="tab-divider" />
        <div className="tab-content mt-8 ml-8 mr-8 ">
            
        {activeTab === "info" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="timeline-container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="timeline-animation"
                  ref={ref}
                >
                  <Timeline mode="alternate" className="timeline sm:ml-0">
                    <Timeline.Item label="2024-03-18">
                      <motion.div
                        initial={{ x: isVisible ? '-100%' : 0, opacity: isVisible ? 0 : 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:items-start"
                      >
                        <motion.img
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          src={food}
                          alt="item1"
                          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 relative rounded-xl"
                        />
                        <motion.span
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-left w-full sm:w-1/2 md:w-1/2 lg:w-1/2 relative whitespace-normal"
                        >
                          {t('ItemDescription')}
                        </motion.span>
                      </motion.div>
                    </Timeline.Item>
                    <Timeline.Item label="2024-03-18">
                      <motion.div
                        initial={{ x: isVisible ? '100%' : 0, opacity: isVisible ? 0 : 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-end"
                      >
                        <motion.img
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          src={food}
                          alt="item2"
                          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 rounded-xl"
                        />
                        <motion.span
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-left w-full sm:w-1/2 md:w-1/2 lg:w-1/2 whitespace-normal"
                        >
                          {t('ItemDescription')}
                        </motion.span>
                      </motion.div>
                    </Timeline.Item>
                    <Timeline.Item label="2024-03-18">
                      <motion.div
                        initial={{ x: isVisible ? '-100%' : 0, opacity: isVisible ? 0 : 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                      >
                        <motion.img
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          src={food}
                          alt="item3"
                          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-4 rounded-xl"
                        />
                        <motion.span
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-left w-full sm:w-1/2 md:w-1/2 lg:w-1/2 whitespace-normal"
                        >
                          {t('ItemDescription')}
                        </motion.span>
                      </motion.div>
                    </Timeline.Item>
                  </Timeline>
                </motion.div>
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
                <h3>Tab 2 Content</h3>
                <p>Track your progress with the free "My Learning" program here at W3Schools.
                  Log in to your account, and start earning points!
                  This is an optional feature.
                  You can study at W3Schools without using My Learning.
                </p>
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
      <div className="footer-container bottom-0 w-full bg-white flex justify-center overflow-hidden">
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: 'tween', ease: 'easeInOut' }}
          className="footer-images-container flex justify-center"
        >
          <div className="grid grid-cols-4 items-center justify-between mt-10  bg-white p-2">
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
