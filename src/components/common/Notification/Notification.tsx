import React, { FunctionComponent } from "react"
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import { Alert } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

interface FavoriteItem {
    data: {
      id: number;
      title: string;
      // price: string;
      // eventTitle: string;
    }[]
}

const Notification: React.FC<FavoriteItem> = ({ data }) => {
    const { t } = useTranslation();
    return (
        <>
        {
          data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.8 }}
              className="fixed top-10 right-2 md:right-10 z-50"
            >
              <Alert
                message={
                  <span>
                    <CheckOutlined style={{ color: 'success' }} /> {t('Success')}{' '}
                  </span>
                }
                description={t('Favorite', { name: item?.title || '' })}
                type="success"
                closable
              />
            </motion.div>
          ))
        }
        </>
        
    )
}
export default Notification