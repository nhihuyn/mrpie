import React, { memo } from "react";

const InputSelect = ({ value, changeValue, options, defaultValue }) => {
  return (
    <select
      className="form-select text-md gap-2 rounded-md bg-[#F5F5F5] focus:ring-0  outline-none ring-0"
      value={value}
      defaultValue={defaultValue} // Add defaultValue prop
      onChange={(e) => changeValue(e.target.value)}
    >
      {options?.map((el) => (
        <option key={el.id} value={el.value} className="">
          {el.text}
        </option>
      ))}
    </select>
  );
};

export default memo(InputSelect);
