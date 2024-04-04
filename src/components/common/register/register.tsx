import React, { useState, useRef, useCallback } from "react";
import { Alert, Space } from "antd"; // Import Ant Design components
import { Radio } from "antd";
import { useTranslation } from "react-i18next";

import UsernameField from "./components/UsernameField";
import PasswordField from "./components/passwordField";
import EmailField from "./components/emailField";
import FullnameField from "./components/FullnameField";
import PhoneNumField from "./components/PhoneNumField";


import "./register.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const { t } = useTranslation();
  const isFormValid = useRef(true);

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [bussinessRole, setBussinessRole] = useState(false);

  const [usernameStatus, setUsernameStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  const [fullnameStatus, setFullnameStatus] = useState("");
  const [phonenumStatus, setPhonenumStatus] = useState("");

  
  const showAlert = (isFormValid) => {
    let timeoutId; // Declare timeoutId inside the function
    if (isFormValid) {
      setShowSuccessAlert(true);
    }
    setShowErrorAlert(true);

    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the previous timeout if it exists
    }

    timeoutId = setTimeout(() => {
      if (isFormValid) {
        setShowSuccessAlert(false);
      }
      setShowErrorAlert(false);
    }, 2000);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      isFormValid.current = true;

      if (fullnameStatus !== "valid") {
        isFormValid.current = false;
        setFullnameStatus("invalid");
      }

      if (usernameStatus !== "valid") {
        isFormValid.current = false;
        setUsernameStatus("invalid");
      }

      if (emailStatus !== "valid") {
        isFormValid.current = false;
        setEmailStatus("invalid");
      }

      if (confirmPasswordStatus !== "valid") {
        isFormValid.current = false;
        setConfirmPasswordStatus("invalid");
      }

      if (phonenumStatus !== "valid") {
        isFormValid.current = false;
        setPhonenumStatus("invalid");
      }

      setPasswordStatus((prev) => {
        return {
          spaceCheck: prev.spaceCheck === "valid" ? "valid" : "invalid",
          lengthCheck: prev.lengthCheck === "valid" ? "valid" : "invalid",
        };
      });

      // Loop over the values of passwordStatus
      for (const value of Object.values(passwordStatus)) {
        if (value === "invalid") {
          isFormValid.current = false;
          break;
        }
      }
      showAlert(isFormValid.current);
    },
    [
      fullnameStatus,
      usernameStatus,
      emailStatus,
      phonenumStatus,
      confirmPasswordStatus,
      passwordStatus,
    ]
  );

  return (
    <div className="mb-8">
      {/* Manage Error Notification */}
      <div
        className={`mt-5 absolute right-0  ${
          showErrorAlert
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

      {/* Manage Successful Notification */}
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

      {/* Form Register */}
      <div className="h-full flex justify-center items-center">
        <form
          id="registerForm"
          className="w-full max-w-sm"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Header Title */}
          <div className="flex justify-between items-center my-6">
            <h1 className="text-xl md:text-3xl font-bold">{t("Register")}</h1>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio onClick={() => setBussinessRole(false)} value={1}>
                {t("Personal")}
              </Radio>
              <Radio onClick={() => setBussinessRole(true)} value={2}>
                {t("Business")}
              </Radio>
            </Radio.Group>
          </div>

          {/* Content Field */}
          <FullnameField
            status={fullnameStatus}
            setStatus={setFullnameStatus}
            roleStatus={bussinessRole}
          />
          <UsernameField
            status={usernameStatus}
            setStatus={setUsernameStatus}
          />
          <EmailField status={emailStatus} setStatus={setEmailStatus} />
          <PhoneNumField
            status={phonenumStatus}
            setStatus={setPhonenumStatus}
          />
          <PasswordField
            status={passwordStatus}
            setStatus={setPasswordStatus}
            confirmStatus={confirmPasswordStatus}
            setConfirmStatus={setConfirmPasswordStatus}
          ></PasswordField>

          {/* Button submit */}
          <div className="flex justify-center items-center">
            <div className="w-full md:w-1/3">
              <button
                className="w-full shadow bg-[#1890FF] hover:bg-[#1890FF] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                {t("Register")}
              </button>
            </div>
          </div>


          <div className="mt-6 flex justify-center items-center">
            <p>
              {t("Already have account")}
              <Link to="/login" >
                <span className="text-md font-bold text-[#1890FF] cursor-pointer">
                  {t("Login")}
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;