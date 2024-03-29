import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { getClassName, getIcon } from "../../../../utils/utils.form";
const FullnameField = ({ status, setStatus, roleStatus }) => {
  const { t } = useTranslation();
  const fullname = useRef("");

  const checkFullname = (fullname) => {
    const fullnameLength = fullname.trim().length;
    return fullnameLength > 1 && fullnameLength < 64;
  };

  return (
    <div className="mb-6">
      <div className="md:w-full">
        <input
          className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
          type="text"
          placeholder={roleStatus ? t("Business name") : t("Fullname")}
          minLength={2}
          maxLength={64}
          onChange={(event) => {
            fullname.current = event.target.value;
            if (checkFullname(fullname.current)) {
              return setStatus("valid");
            }
            return setStatus("");
          }}
          required
        />
      </div>
      {/* Status */}
      <div className={getClassName(status)}>
        <div className=" ml-2">
          {getIcon(status)}
          <span className="ml-2 italic text-sm">
            {t("Input from 2 to 64 character")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullnameField;