import React, { useState, useEffect } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import EventList from './event-list';
import Store from './store';

const Eventmenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("event");
  const [isVisible, setIsVisible] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState("all");
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
      
      if (tab === "event") {
        handleSubTabClick("all");
      }
    });
  };
  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
  };
  console.log(isVisible)

  return (
    <div className="intro-container min-h-screen">
      <div className="breadcrumb-container bg-black text-white p-4">
      
          <Link to="/mainpage" className="text-base text-white hover:text-gray-300 mr-3">
            {t('Home')}
          </Link>
          <RightOutlined className="text-sm mr-3" />
          <strong> 
            <Link to="/eventmenu" className="text-base text-white hover:text-gray-300">
              {t('Event')}
            </Link>
          </strong>
      </div>

      <div className="title-container relative">
        <h1 className="mt-8 ml-10 font-bold text-base">{t('EVENT')}</h1>
        <div className="tab-container flex justify-start mt-8 ml-8">
          <button onClick={() => handleTabClick("event")} className={`mx-3 text-base ${activeTab === "event" ? "text-black border-b-2 border-black" : "text-gray-500 "}`}>
            {t('Event')}
          </button>
          <button onClick={() => handleTabClick("tab2")} className={`mx-2 text-base ${activeTab === "tab2" ? "text-black border-b-2 border-black" : "text-gray-500 "}`}>
            {t('NewStore')}
          </button>
        </div>

        <div className="tab-content mt-8 ml-8 mr-8 relative">
          {activeTab === "event" && (
            <>
              <div className="subtab-container absolute top-0 sm:right-0 mr-10 sm:-mt-20 flex ">
                <button onClick={() => handleSubTabClick("all")} className={`mx-3 text-base ${activeSubTab === "all" ? "text-red-500 border-b-2 border-red-500 font-bold" : "text-gray-500"}`}>
                  {t('AllEvent')}
                </button>
                <button onClick={() => handleSubTabClick("ongoing")} className={`mx-5 text-base ${activeSubTab === "ongoing" ? "text-red-500 border-b-2 border-red-500 font-bold " : "text-gray-500"}`}>
                  {t('OngoingEvent')}
                </button>
                <button onClick={() => handleSubTabClick("ended")} className={`mx-3 text-base ${activeSubTab === "ended" ? "text-red-500 border-b-2 border-red-500 font-bold " : "text-gray-500"}`}>
                  {t('EndedEvent')}
                </button>
              </div>
            
            {activeSubTab === "all" && ( <EventList /> )}

            {activeSubTab === "ongoing" && ( <EventList /> )}
            

            {activeSubTab === "ended" && ( <EventList /> )}

            </>
          )}

          {activeTab === "tab2" && (
             <Store />
         
          )}
        </div>

        {showScrollButton && (
          <div className="fixed bottom-0 left-0 right-0 ">
            <div className="flex justify-around mt-8 mb-4">
              <button onClick={scrollToBottom} className="bg-black hover:bg-blue-700 text-white font-bold md:ml-14 py-2 px-10 lg:ml-7 rounded-xl">
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
