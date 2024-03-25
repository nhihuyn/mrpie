import React, { useState } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ForgotPasswd: React.FC = () => {
  const { t } = useTranslation();

  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailInput = event.currentTarget.email as HTMLInputElement;

    // Kiểm tra điều kiện và hiển thị các thông báo lỗi tương ứng
    const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
      setEmailError(true);
      setErrorMessage(t('InvalidEmail'));
      showErrorMessage();
    } else {
      setEmailError(false);
      setSuccessMessage(t('PasswordResetRequestSent'));
      showSuccessMessage();
    }
  };

  const showErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
      setEmailError(false);
    }, 2000);
  };

  const showSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <div className="forgot-password-container mx-auto max-w-xl mt-40 px-5">
      <h2 className="text-center font-bold sm:text-4xl mb-10 md:text-3xl">{t('PasswordRetrieval')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className={`form-group mb-6 mt-4 px-5 flex flex-col ${emailError ? 'border-red-500' : ''}`}>
          <label htmlFor="email" className="block mb-2"></label>
          <input
            type="email"
            id="email"
            name="email"
            className={`sm:w-full px-2 py-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 ${emailError ? 'border-red-500' : ''}`}
            placeholder={t('EmailAddress')}
          />
          {emailError && (
            <p className="text-red-500 text-sm">{t('InvalidEmail')}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-1/2 md:w-1/3 mx-auto mt-4 bg-blue-500 hover:bg-gray-500 text-white text-1xl py-3 rounded-lg transition duration-300 mb-6 flex justify-center">
          {t('ResetPassword')}
        </button>

        <div className="signup-link mt-3 mb-20 text-center">
          <p><a href="#" className="text-gray-400 hover:text-gray-700 text-1xl">{t('BackToLogin')}</a></p>
        </div>
      </form>

      {errorMessage && (
      <motion.div
         initial={{ opacity: 0, x: 200 }} 
         animate={{ opacity: 1, x: 0 }} 
         exit={{ opacity: 0, x: 200 }} 
         transition={{ duration: 0.8 }} 
          className="fixed top-10 right-2 md:right-10"
       >
      <Alert
        message={<span><ExclamationCircleOutlined style={{ color: 'red' }} /> {t('Error')} </span>}
        description={t('ErrorMessage')}
        type="error"
        closable
        onClose={() => setErrorMessage('')}
      />
    </motion.div>
  )}


    {successMessage && (
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
          onClose={() => setSuccessMessage('')}
        />
      </motion.div>
    )}
    </div>
  );
};

export default ForgotPasswd;