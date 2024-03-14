import React, { useState, useRef } from "react";
import { Alert, Space } from "antd"; // Import Ant Design components

const RegisterForm = () => {
  let isValidate;
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const fullNameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const retypePasswordRef = useRef(null);
  const registerFormRef = useRef(null);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [retypePasswordError, setRetypePasswordError] = useState("");

  const fullNameErrorMessage = [
    "Họ và tên không được để trống",
    "Họ và tên quá dài",
    "Họ và tên quá ngắn",
  ];

  const userNameErrorMessage = [
    "Username không được để trống",
    "Username quá dài",
    "Username quá ngắn",
  ];

  const emailErrorMessage = [
    "Email không được để trống",
    "Email quá dài",
    "Email quá ngắn",
    "Email không phù hợp",
  ];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneErrorMessage = [
    "Số điện thoại không được để trống",
    "Số điện thoại quá dài",
    "Số điện thoại quá ngắn",
    "Số điện thoại không phù hợp",
  ];
  const phoneRegex = /^(?=.*\d).{10,11}$/;

  const passwordErrorMessage = [
    "Mật khẩu không được để trống",
    "Mật khẩu quá dài",
    "Mật khẩu quá ngắn",
    "Mật khẩu phải ít nhất 8 kí tự",
    "Mật khẩu không chính xác với phần Nhập lại mật khẩu",
  ];

  const retypePasswordErrorMessage = [
    "Mật khẩu không được để trống",
    "Mật khẩu quá dài",
    "Mật khẩu quá ngắn",
    "Mật khẩu phải ít nhất 8 kí tự",
    "Nhập lại mật khẩu không chính xác với phần mật khẩu",
  ];

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  
    const resetForm = () => {
      if (registerFormRef.current) {
        setFullName("");
        setUsername("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setRetypePassword("");
        setFullNameError("");
        setUsernameError("");
        setEmailError("");
        setPhoneNumberError("");
        setPasswordError("");
        setRetypePasswordError("");
        setShowAlert(false);
        setShowSuccessAlert(false);
      }
    };

  const validateForm = (event) => {
    isValidate = true;
    event.preventDefault();
    validateFullName();
    validateUsername();
    validateEmail();
    validatePhoneNumber();
    validatePassword();
    validateRetypePassword();
    if(isValidate){
      displaySuccessAlert();
    }
  };

  const displaySuccessAlert = () => {
    let timeoutId; // Declare timeoutId inside the function

    setShowSuccessAlert(true);

    if (timeoutId) {
        clearTimeout(timeoutId); // Clear the previous timeout if it exists
    }

    timeoutId = setTimeout(() => {
        setShowSuccessAlert(false);
    }, 5000);
  };

  const displayErrorMessage = (setError, errorMessage, elementRef) => {
    isValidate = false;
    setError(errorMessage);
    setShowAlert(true);
    elementRef.current.classList.add(
      "invalid:border-pink-500",
      "invalid:text-pink-600"
    );
    const timeoutId = setTimeout(() => {
      setError("");
      setShowAlert(false);
      
      elementRef.current.classList.remove(
        "invalid:border-pink-500",
        "invalid:text-pink-600"
      );
    }, 10000);

    // Clear the timeout when the function is called again
    if (elementRef.current.timeoutId) {
      clearTimeout(elementRef.current.timeoutId);
    }

    // Store the timeout ID in the elementRef for future reference
    elementRef.current.timeoutId = timeoutId;
  };

  

  const validateFullName = () => {
    if (fullName.trim() === "") {
      displayErrorMessage(
        setFullNameError,
        fullNameErrorMessage[0],
        fullNameRef
      );
    } else if (fullName.length >= 64) {
      displayErrorMessage(
        setFullNameError,
        fullNameErrorMessage[1],
        fullNameRef
      );
    } else if (fullName.length < 2) {
      displayErrorMessage(
        setFullNameError,
        fullNameErrorMessage[2],
        fullNameRef
      );
    }
  };

  const validateUsername = () => {
    if (username.trim() === "") {
      displayErrorMessage(
        setUsernameError,
        userNameErrorMessage[0],
        usernameRef
      );
    } else if (username.length > 64) {
      displayErrorMessage(
        setUsernameError,
        userNameErrorMessage[1],
        usernameRef
      );
    } else if (username.length < 2) {
      displayErrorMessage(
        setUsernameError,
        userNameErrorMessage[2],
        usernameRef
      );
    }
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      displayErrorMessage(setEmailError, emailErrorMessage[0], emailRef);
    } else if (email.length >= 64) {
      displayErrorMessage(setEmailError, emailErrorMessage[1], emailRef);
    } else if (email.length <=1 ) {
      displayErrorMessage(setEmailError, emailErrorMessage[2], emailRef);
    } else if (!emailRegex.test(email)) {
      displayErrorMessage(setEmailError, emailErrorMessage[3], emailRef);
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.trim() === "") {
      displayErrorMessage(setPhoneNumberError, phoneErrorMessage[0], phoneRef);
    } else if (phoneNumber.length >= 12) {
      displayErrorMessage(setPhoneNumberError, phoneErrorMessage[1], phoneRef);
    } else if (phoneNumber.length <= 6) {
      displayErrorMessage(setPhoneNumberError, phoneErrorMessage[2], phoneRef);
    } else if (!phoneRegex.test(phoneNumber)) {
      displayErrorMessage(setPhoneNumberError, phoneErrorMessage[3], phoneRef);
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      displayErrorMessage(
        setPasswordError,
        passwordErrorMessage[0],
        passwordRef
      );
    } else if (password.length >= 64) {
      displayErrorMessage(
        setPasswordError,
        passwordErrorMessage[1],
        passwordRef
      );
    } else if (password.length <= 7) {
      displayErrorMessage(
        setPasswordError,
        passwordErrorMessage[2],
        passwordRef
      );
    } else if (passwordRegex.test(password)) {
      displayErrorMessage(
        setPasswordError,
        passwordErrorMessage[3],
        passwordRef
      );
    }
  };

  const validateRetypePassword = () => {
    if (retypePassword.trim() === "") {
      displayErrorMessage(
        setRetypePasswordError,
        retypePasswordErrorMessage[0],
        retypePasswordRef
      );
    } else if (retypePassword.length >= 64) {
      displayErrorMessage(
        setRetypePasswordError,
        retypePasswordErrorMessage[1],
        retypePasswordRef
      );
    } else if (retypePassword.length <= 7) {
      displayErrorMessage(
        setRetypePasswordError,
        retypePasswordErrorMessage[2],
        retypePasswordRef
      );
    } else if (passwordRegex.test(retypePassword)) {
      displayErrorMessage(
        setRetypePasswordError,
        retypePasswordErrorMessage[3],
        retypePasswordRef
      );
    } else if (retypePassword !== password) {
      displayErrorMessage(
        setRetypePasswordError,
        retypePasswordErrorMessage[4],
        retypePasswordRef
      );
    }
  };



  return (
    <div >
      <div
        className={`mt-5 absolute right-0  ${
          showAlert
            ? "visible transform -translate-x-10  duration-700"
            : " invisible"
        }`}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Alert
            message="Error"
            description="This is an error message about copywriting."
            type="error"
            showIcon
          />
        </Space>
      </div>

      <div
        className={`mt-5 absolute right-0  ${
          showSuccessAlert
            ? "visible transform -translate-x-10 duration-700"
            : "  invisible"
        }`}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
        </Space>
      </div>

      <div className="h-full flex justify-center items-center">
        <form
          id="registerForm"
          ref={registerFormRef}
          className="w-full max-w-sm"
          onSubmit={validateForm}
          noValidate
        >
          {/* Title */}
          <div className="flex justify-center items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Đăng Ký</h1>
          </div>

          {/* Họ và tên */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={fullNameRef}
                type="text"
                placeholder="Họ và tên"
                minLength={2}
                maxLength={64}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: fullNameError ? "block" : "none" }}
            >
              {fullNameError}
            </p>
          </div>

          {/* Tài khoản */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={usernameRef}
                type="text"
                placeholder="Tài khoản"
                minLength={2}
                maxLength={64}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: usernameError ? "block" : "none" }}
            >
              {usernameError}
            </p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={emailRef}
                type="email"
                placeholder="Email"
                minLength={2}
                maxLength={64}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: emailError ? "block" : "none" }}
            >
              {emailError}
            </p>
          </div>

          {/* Số điện thoại */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={phoneRef}
                type="tel"
                placeholder="Số điện thoại"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^0-9+()]/g,
                    ""
                  );
                }}
                minLength={6}
                maxLength={12}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: phoneNumberError ? "block" : "none" }}
            >
              {phoneNumberError}
            </p>
          </div>

          {/* Mật khẩu */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={passwordRef}
                type="password"
                placeholder="Mật khẩu"
                minLength={7}
                maxLength={64}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: passwordError ? "block" : "none" }}
            >
              {passwordError}
            </p>
          </div>

          {/* Nhập lại Mật khẩu */}
          <div className="mb-6">
            <div className="md:w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
                ref={retypePasswordRef}
                type="password"
                placeholder="Nhập lại mật khẩu"
                minLength={7}
                maxLength={64}
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                required
              />
            </div>
            <p
              className="text-sm font-semibold text-red-400 ml-5"
              style={{ display: retypePasswordError ? "block" : "none" }}
            >
              {retypePasswordError}
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/3">
              <button
                className="w-full shadow bg-[#1890FF] hover:bg-[#1890FF] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Đăng Ký
              </button>
            </div>
          </div>

          {/* Đường dẫn đăng nhập */}
          <div className="mt-6 flex justify-center items-center">
            <p>
              Bạn đã có tài khoản ?
              <span className="text-md font-bold text-[#1890FF] cursor-pointer">
                <a> Đăng nhập</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
