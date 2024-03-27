import React, { useState, useEffect, } from 'react';
import { Breadcrumb} from 'antd';
import food from '../../../assets/images/food.png';
import cooperate from '../../../assets/images/cooperate.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';



const Intro: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  //const ref = useRef<HTMLDivElement>(null);

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
              <div className="timeline-container">
              <div className="container">
          <div
            className="flex flex-col md:grid grid-cols-8 mx-auto p-2 text-black"
          >
          <motion.div
            initial={{ opacity: 0, x: isVisible ? -100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex md:contents"
          >
            {/*Right*/}
            <div className="flex md:contents ">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-20 -mt-24 rounded-full bg-white border-4 border-blue-500 "
                ></div>
              </div>
              <div
                className="col-start-6 col-end-9 px-2 rounded-xl mr-auto "
              >
                <div className="absolute w-3 h-3 text-black rounded-full mt-1.5 items-end "></div>
                <time className="mb-1 text-sm font-normal leading-none text-black ">March 2022</time>
                <img src={food} alt="item2" className="w-full 2 mb-4 mt-1 rounded-xl" /> 
                <p className="text-left w-full  whitespace-normal ">
                 {t('ItemDescription')}
                  </p>

              </div>
            </div>
            </motion.div>


              {/*Left*/}
            <motion.div
            initial={{ opacity: -100, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row-reverse md:contents"
          >
            <div className="flex flex-row-reverse md:contents">
              <div
                className=" col-start-6 col-end-9 p-2 rounded-xl mt-20 "
              >
                <div className="absolute text-right w-3 h-3 rounded-full mt-10 "></div>
                <time className="mb-1  col-start-4 text-sm leading-none text-black">March 2023</time>
                <img src={food} alt="item2" className="w-full mb-4 rounded-xl" /> 
                  <p className="text-left w-full  whitespace-normal">
                  {t('ItemDescription')}
                 </p>

              </div>

              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-24 rounded-full bg-white border-4 border-blue-500"
                ></div>
              </div>
            </div>
            </motion.div>

           {/*Right*/}
           <motion.div
            initial={{ opacity: 0, x: isVisible ? -100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex md:contents"
          >
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-24 rounded-full bg-white border-4 border-blue-500"
                ></div>
              </div>
              <div
                className=" col-start-6 col-end-9 p-2 rounded-xl mt-20 mr-auto "
              >
                <div className="absolute w-3 h-3 rounded-full mt-4 "></div>
                  <time className=" text-sm font-normal leading-none text-black">March 2022</time>
                    <img src={food} alt="item2" className="w-full mt-5 mb-4 rounded-xl" /> 
                      <p className="text-left w-full  whitespace-normal">
                       {t('ItemDescription')}
                      </p>
              </div>
            </div>
            </motion.div>                
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
