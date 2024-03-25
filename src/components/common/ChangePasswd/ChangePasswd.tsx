import React, { useState } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ChangePasswd: React.FC = () => {
  const { t } = useTranslation();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      // Nếu có ô input rỗng, hiển thị thông báo lỗi
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else if (newPassword === confirmPassword) {
      // Thành công
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
      // Tiến hành thay đổi mật khẩu
    } else {
      // Thất bại
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div className="change-password-container mx-auto max-w-xl mt-40 px-4">
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 200 }} 
          transition={{ duration: 0.8 }} 
          className="fixed top-10 right-2 md:right-10"
        >
          <Alert
            message={
              <span>
                <ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')}{' '}
              </span>
            }
            description={t('ErrorMessage')}
            type="error"
            closable
            onClose={() => setShowAlert(false)}
          />
        </motion.div>
      )}

      
      {successAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: 200 }} 
          transition={{ duration: 0.8 }} 
          className="fixed top-10 right-2 md:right-10"
        >
          <Alert
             message={<span><CheckCircleOutlined style={{ color: 'green' }} /> {t('Success')}</span>}
             description={t('SuccessMessage')}
             type="success"
             closable
            // showIcon
          />
        </motion.div>
      )}

      <p className="text-center text-3xl md:text-4xl mb-10">{t('ChangePassword')}</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className={`form-group mt-4 mb-6 px-5 flex flex-col ${showAlert ? 'border-red-500' : ''}`}>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className={`w-full text-sm px-4 py-2 border-2 rounded-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 ${showAlert ? 'border-red-500' : ''}`}
            placeholder={t('NewPassword')}
            minLength={7}
            maxLength={64}
            // required
          />
          {showAlert && newPassword.trim() === '' && (
            <p className="text-red-500 text-sm ml-3 ">{t('NewPasswordRequired')}</p>
          )}
        </div>
        <div className={`form-group mb-6 px-5 flex flex-col ${showAlert ? 'border-red-500' : ''}`}>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className={`w-full text-sm px-4 py-2 border-2 rounded-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 ${showAlert ? 'border-red-500' : ''}`}
            placeholder={t('ConfirmPassword')}
            minLength={7}
            maxLength={64}
            // required
          />
          {showAlert && confirmPassword.trim() === '' && (
            <p className="text-red-500 text-sm ml-3">{t('ConfirmPasswordRequired')}</p>
          )}
          {showAlert && newPassword.trim() !== '' && confirmPassword.trim() !== '' && newPassword !== confirmPassword && (
            <p className="text-red-500 text-sm ml-3">{t('PasswordMismatch')}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-1/2 md:w-2/5 text-base mt-8 mx-auto bg-blue-500 text-white py-2 rounded-lg transition duration-300 mb-2"
        >
          {t('ChangePassword')}
        </button>
      </form>
      <div className="cancel-text text-center">
        <p><a href="#" className="hover:text-gray-600 text-gray-500 text-base">{t('Cancel')}</a></p>
      </div>
    </div>
  );
};

export default ChangePasswd;