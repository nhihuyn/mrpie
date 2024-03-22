import React, { useState, useRef } from 'react';
import { Alert } from 'antd';
import { ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const { t } = useTranslation();

  let isValidate;
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isOrganization, setIsOrganization] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    isValidate = true;
    event.preventDefault();
    validateUsername();
    validatePassword();
    if (isValidate) {
      setShowSuccessAlert(true);
      // Tự động tắt Alert khi thành công 
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }
  };

  const displayErrorMessage = (setError, errorMessage, elementRef) => {
    isValidate = false;
    setError(errorMessage);
    setShowAlert(true);
    elementRef.current.classList.add('border-pink-500', 'text-pink-600');
    const timeoutId = setTimeout(() => {
      setError('');
      setShowAlert(false);
      elementRef.current.classList.remove('border-pink-500', 'text-pink-600');
    }, 3000);

    if (elementRef.current.timeoutId) {
      clearTimeout(elementRef.current.timeoutId);
    }

    elementRef.current.timeoutId = timeoutId;
  };

  const validateUsername = () => {
    if (username.trim() === '') {
      displayErrorMessage(
        setUsernameError,
        t('UsernameEmpty'),
        usernameRef
      );
    } else if (username.length > 64) {
      displayErrorMessage(
        setUsernameError,
        t('UsernameTooLong'),
        usernameRef
      );
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      displayErrorMessage(
        setUsernameError,
        t('UsernameInvalidCharacters'),
        usernameRef
      );
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      displayErrorMessage(
        setPasswordError,
        t('PasswordEmpty'),
        passwordRef
      );
    } else if (password.length < 7) {
      displayErrorMessage(
        setPasswordError,
        t('PasswordTooShort'),
        passwordRef
      );
    } else if (password.length > 64) {
      displayErrorMessage(
        setPasswordError,
        t('PasswordTooLong'),
        passwordRef
      );
    }
  };

  const toggleOrganization = () => {
    setIsOrganization(!isOrganization);
  };

  return (
    <div className="login-container mx-auto max-w-xl mt-40 px-4">
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

      
      {showSuccessAlert && (
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
             showIcon
          />
        </motion.div>
      )}

      <h2 className="text-center font-bold sm:text-5xl text-3xl px-20 mb-10">{t('Login')}</h2>
      <form onSubmit={validateForm} className="flex flex-col">
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="username" className="block mb-2">
            
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full px-4 py-3 border-2 border-gray rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500
            ${usernameError ? 'border-pink-500 text-pink-600' : ''}
            `}
            placeholder={t('Username')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
          {usernameError && (
            <p className="text-sm font-semibold text-red-400 ">{usernameError}</p>
          )}
        </div>
        <div className="form-group mb-6 flex flex-col">
          <label htmlFor="password" className="block mb-2">
            
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full px-4 py-3 border-2 border-gray rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
              passwordError ? 'border-pink-500 text-pink-600' : ''
            }`}
            placeholder={t('Password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          {passwordError && (
            <p className="text-sm font-semibold text-red-400 ">{passwordError}</p>
          )}
        </div>
        <div className="form-group mb-6 flex items-center">
          <input
            type="checkbox"
            id="organization"
            className="mr-2"
            checked={isOrganization}
            onChange={toggleOrganization}
          />
          <label htmlFor="organization" className="text-sm">
            {t('Organization')}
          </label>
        </div>
        <div className="forgot-password mb-6 text-right">
          <a href="#" className="text-gray-600 text-sm hover:text-gray-400">
            {t('ForgotPassword')}
          </a>
        </div>
        <button
        id="login"
          type="submit"
          className="w-1/2 md:w-1/3 mx-auto bg-blue-500 hover:bg-gray-500 text-white text-xl py-3 rounded-lg transition duration-300 mb-6 flex justify-center"
          >
          {t('login')}
        </button>

      </form>
      <div className="signup-link mt-2 mb-14 w-1/2 md:w-1/3 mx-auto text-center">
        <p>
          <a href="#" className="text-blue-600 hover:text-blue-400 text-xl ">
            {t('CreateAccount')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
