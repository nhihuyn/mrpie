import React, { useState } from 'react';
import { Alert, Input } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ChangePasswd: React.FC = () => {
  const { t } = useTranslation();

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else if (newPassword === confirmPassword) {
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
    } else {
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

      <h2 className="text-center sm:text-4xl text-2xl  mb-10">{t('ChangePassword')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col text-sm">
        <div className={`form-group mt-4 mb-6 px-5 flex flex-col ${showAlert ? 'border-red-500' : ''}`}>
          <label htmlFor="newPassword" className="block mb-2"></label>
          <Input.Password
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChangeNewPassword}
            className={`w-full px-4 py-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 ${showAlert ? 'border-red-500' : ''}`}
            placeholder={t('NewPassword')}
            minLength={7}
            maxLength={64}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
          />
          {showAlert && newPassword.trim() === '' && (
            <p className="text-sm font-semibold text-red-400 ">{t('NewPasswordRequired')}</p>
          )}
        </div>
        <div className={`form-group mb-6 px-5 flex flex-col ${showAlert ? 'border-red-500' : ''}`}>
          <label htmlFor="confirmPassword" className="block mb-2"></label>
          <Input.Password
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className={`w-full px-4 py-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 ${showAlert ? 'border-red-500' : ''}`}
            placeholder={t('ConfirmPassword')}
            minLength={7}
            maxLength={64}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
          />
          {showAlert && confirmPassword.trim() === '' && (
            <p className="text-sm font-semibold text-red-400 ">{t('ConfirmPasswordRequired')}</p>
          )}
          {showAlert && newPassword.trim() !== '' && confirmPassword.trim() !== '' && newPassword !== confirmPassword && (
            <p className="text-red-500 text-sm ">{t('PasswordMismatch')}</p>
          )}
        </div>
        <button
          type="submit"
          className="sm:w-full md:w-1/2 mt-8 mx-auto bg-blue-500 hover:bg-gray-500 text-white text-lg py-2 px-8 rounded-lg transition duration-300 mb-2"
        >
          {t('ChangePassword')}
        </button>
      </form>
      <div className="cancel-text text-center">
        <p><a href="#" className="hover:text-gray-600 text-gray-500 text-lg ">{t('Cancel')}</a></p>
      </div>
    </div>
  );
};

export default ChangePasswd;
