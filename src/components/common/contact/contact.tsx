import React, { useState } from "react"
// import Map from "../mainpage/components/map"
import MapStore from "./map-store";

const data = [
  {
    id: 1,
    name: "Tên chi nhánh 01",
    address:
      "135 Hai Bà Trưng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh , Vietnam",
  },
  {
    id: 2,
    name: "Tên chi nhánh 02",
    address:
      "Ruby Home 1, 92 Đ. Nguyễn Hữu Cảnh, Saigon Pearl, Bình Thạnh, Thành phố Hồ Chí Minh 70000, Vietnam",
  },
  {
    id: 3,
    name: "Tên chi nhánh 03",
    address: "63 Nguyễn Cứ Thành Phố Hồ Chí Minh",
  },

  {
    id: 4,
    name: "Tên chi nhánh 06",
    address:
      "603a Đ. Lũy Bán Bích, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh, Vietnam",
  },
  {
    id: 5,
    name: "Tên chi nhánh 07",
    address:
      "318/1 Trịnh Đình Trọng, Hoà Thanh, Tân Phú, Thành phố Hồ Chí Minh, Vietnam",
  },
  {
    id: 9,
    name: "Tên chi nhánh 06",
    address:
      "250 Trịnh Đình Trọng, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh, Vietnam",
  },

  {
    id: 11,
    name: "Tên chi nhánh 08",
    address:
      "07 Công trường Lam Sơn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh 710212, Vietnam",
  },
];
const Contact = () => {
    const [nearbyStores, setNearbyStores] = useState([]);
    return (
        <div className="flex w-full ">
        {/*MAP*/}
        <div className="w-4/5 h-[1000px]">
          {/* <Map/> */}
          <MapStore/>
        </div>
        {/*right sidebar*/}
        <div className="w-1/5">
          <div className="flex   text-black bg-white justify-center items-center p-1 gap-2 cursor-pointer  border-black">
            {/*button find near store*/}
            <div className="flex border items-center justify-center gap-2 p-2">
              {/*icon*/}
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_11915)">
                  <path
                    d="M21.8036 10.5246H18.8031C18.3783 6.76652 15.5277 3.78627 11.933 3.34219V0.205357C11.933 0.0924107 11.8446 0 11.7366 0H10.2634C10.1554 0 10.067 0.0924107 10.067 0.205357V3.34219C6.47232 3.78627 3.62165 6.76652 3.19687 10.5246H0.196429C0.0883928 10.5246 0 10.617 0 10.7299V12.2701C0 12.383 0.0883928 12.4754 0.196429 12.4754H3.19687C3.62165 16.2335 6.47232 19.2137 10.067 19.6578V22.7946C10.067 22.9076 10.1554 23 10.2634 23H11.7366C11.8446 23 11.933 22.9076 11.933 22.7946V19.6578C15.5277 19.2137 18.3783 16.2335 18.8031 12.4754H21.8036C21.9116 12.4754 22 12.383 22 12.2701V10.7299C22 10.617 21.9116 10.5246 21.8036 10.5246ZM11 17.7634C7.69018 17.7634 5.00893 14.9603 5.00893 11.5C5.00893 8.03973 7.69018 5.23661 11 5.23661C14.3098 5.23661 16.9911 8.03973 16.9911 11.5C16.9911 14.9603 14.3098 17.7634 11 17.7634Z"
                    fill="black"
                    fillOpacity="0.85"
                  />
                  <path
                    d="M11.0004 8.42279C10.2122 8.42279 9.4756 8.74109 8.91823 9.32636C8.36086 9.90906 8.05394 10.6791 8.05394 11.5031C8.05394 12.3271 8.36086 13.0972 8.91823 13.6799C9.4756 14.2601 10.2147 14.5835 11.0004 14.5835C11.7861 14.5835 12.5252 14.2626 13.0825 13.6799C13.6374 13.0972 13.9468 12.3246 13.9468 11.5031C13.9468 10.6817 13.6399 9.90906 13.0825 9.32636C12.8103 9.0386 12.486 8.81047 12.1285 8.65532C11.771 8.50017 11.3875 8.42112 11.0004 8.42279Z"
                    fill="black"
                    fillOpacity="0.85"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_11915">
                    <rect width="22" height="23" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <button className="font-semibold text-md">
                Tìm kiếm cửa hàng gần vị trí hiện tại
              </button>
            </div>
          </div>
          {/*store list*/}
          <div className="bg-[#F2EBE6] overflow-y-auto max-h-[800px] pl-4 pr-2 pt-4">
            <h1 className="text-red-500 font-bold text-lg">
              Danh sách 10 kết quả tìm kiếm
            </h1>
            {data.map((el, index) => (
              <div
                key={el.id}
                // onClick={() => handleOnClick(el.address)}
                className="mt-4 bg-white text-black cursor-pointer font-semibold flex flex-col p-3 hover:opacity-75"
              >
                <span className="text-[14px]">{el.name}</span>
                <span className="text-[14px]">{el.address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Contact