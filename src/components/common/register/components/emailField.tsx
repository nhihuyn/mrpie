import React, { useRef } from "react";

import { getClassName, getIcon } from "../../../../utils/utils.form";
import { useTranslation } from "react-i18next";

const EmailField = ({ status, setStatus }) => {
  const { t } = useTranslation();
  const email = useRef("");
  const checkEmail = (email) => {
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
    return email.match(emailRegex);
  };

  return (
    <div className="mb-6">
      <div className="md:w-full">
        <input
          className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
          name="email"
          type="email"
          placeholder={t("Email")}
          minLength={2}
          maxLength={64}
          onChange={(event) => {
            email.current = event.target.value;
            if (checkEmail(email.current)) {
              return setStatus("valid");
            }
            return setStatus("");
          }}
          required
        />
      </div>
      {/* Status */}
      <div className={getClassName(status)}>
        <div className="ml-2 ">
          {getIcon(status)}
          <span className="ml-2 italic text-sm">
            {t("Email valid (example@gmail.com)")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmailField;