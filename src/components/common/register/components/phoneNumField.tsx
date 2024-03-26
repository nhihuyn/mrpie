import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { getClassName, getIcon } from "../../../../utils/utils.form";

const PhoneNumField = ({ status, setStatus }) => {
  const { t } = useTranslation();
  const phonenumber = useRef("");

  const checkVietnamesePhoneNumber = (number) => {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  };

  return (
    <div className="mb-6">
      <div className="md:w-full">
        <input
          className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1890FF] "
          type="tel"
          placeholder={t("PhoneNumber")}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9+()]/g,
              ""
            );
          }}
          minLength={9}
          maxLength={11}
          onChange={(event) => {
            phonenumber.current = event.target.value;
            if (checkVietnamesePhoneNumber(phonenumber.current)) {
              return setStatus("valid");
            }
            return setStatus("");
          }}
          required
        />
      </div>

      {/*status*/}
      <div className={getClassName(status)}>
        <div className=" ml-2">
          {getIcon(status)}
          <span className="ml-2 italic text-sm">{t("Valid phonenumber")} </span>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumField;