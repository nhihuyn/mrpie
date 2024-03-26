import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getClassName, getIcon } from "../../../../utils/utils.form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";

const PasswordField = ({
  status,
  setStatus,
  confirmStatus,
  setConfirmStatus,
}) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword);
  };

  const checkPasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const checkPassword = (password) => {
    const passwordLength = password.trim().length;
    let spaceRegex = new RegExp(/\s+/);
    let output = {
      validSpace: !password.match(spaceRegex),
      validLength: passwordLength >= 7 && passwordLength <= 64,
    };
    return output;
  };

  const password = useRef("");
  const confirmPassword = useRef("");

  return (
    <div>
      <div className="mb-6">
        {/* Password field */}
        <div className="relative">
          <div className="md:w-full ">
            <input
              className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
              type={showPassword === false ? "password" : "text"}
              name="password"
              placeholder={t("Password")}
              minLength={7}
              maxLength={64}
              //   Hàm onChange để automation validate
              onChange={(event) => {
                password.current = event.target.value;
                let check = checkPassword(password.current);
                let _status = {
                  lengthCheck: check.validLength ? "valid" : "",
                  spaceCheck: check.validSpace ? "valid" : "",
                };

                if (!_status.spaceCheck) return;

                setStatus(_status);

                if (
                  confirmPassword.current !== "" &&
                  !checkPasswordMatch(password.current, confirmPassword.current)
                ) {
                  setConfirmStatus("");
                } else if (
                  confirmPassword.current !== "" &&
                  checkPasswordMatch(password.current, confirmPassword.current)
                ) {
                  setConfirmStatus("valid");
                }
              }}
              required
            />
          </div>
          {/* Show or hidden password value */}
          <div className="absolute top-1 right-4 text-lg cursor-pointer">
            {showPassword === false ? (
              <FontAwesomeIcon icon={faEyeSlash} onClick={togglePassword} />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={togglePassword} />
            )}
          </div>
        </div>

        {/* Status */}
        <div className={getClassName(status.lengthCheck)}>
          <div className="ml-2">
            {getIcon(status.lengthCheck)}
            <span className="ml-2 italic text-sm">
              {t("Input from 7 to 64 character")}
            </span>
          </div>
        </div>
        <div className={getClassName(status.spaceCheck)}>
          <div className="ml-2">
            {getIcon(status.spaceCheck)}
            <span className="ml-2 italic text-sm">
              {t("Not space character")}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        {/* Retpye password field */}
        <div className="relative">
          <div className="md:w-full">
            <input
              className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
              type={showRetypePassword === false ? "password" : "text"}
              name="confirmPassword"
              placeholder={t("RetypePassword")}
              minLength={7}
              maxLength={64}
              onChange={(event) => {
                confirmPassword.current = event.target.value;
                if (
                  checkPasswordMatch(password.current, confirmPassword.current)
                ) {
                  return setConfirmStatus("valid");
                }
                return setConfirmStatus("");
              }}
              required
            />
          </div>
          {/* Show or hidden retype password field */}
          <div className="absolute top-1 right-4 text-lg cursor-pointer">
            {showRetypePassword === false ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                onClick={toggleRetypePassword}
              />
            ) : (
              <FontAwesomeIcon icon={faEye} onClick={toggleRetypePassword} />
            )}
          </div>
        </div>
        {/* Status */}
        <div className={getClassName(confirmStatus)}>
          <div className="ml-2">
            {getIcon(confirmStatus)}
            <span className="ml-2 italic text-sm">
              {t("Retype password match")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;