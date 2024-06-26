import React, { useState } from "react";
import { Rate, Alert, Select } from "antd";
import { vegan, bg_vegan, badge } from "../../../assets/images/index";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  HeartOutlined,
  ExclamationCircleOutlined,
  RightOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const DetailEvent: React.FC = () => {
  const { t } = useTranslation();

  const [count, setCount] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState<number | undefined>(0);

  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showReviewAlert, setShowReviewAlert] = useState(false);
  const [showReviewSuccessAlert, setShowReviewSuccessAlert] = useState(false);
  const [showFavoriteAlert, setShowFavoriteAlert] = useState(false);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCakeType, setSelectedCakeType] = useState<string | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: boolean;
  }>({
    S: false,
    M: false,
    L: false,
    J: false,
  });

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToFavorite = () => {
    setFavorite(true);
    setShowFavoriteAlert(true);
    setTimeout(() => {
      setShowFavoriteAlert(false);
    }, 2000);
  };

  const handleSizeSelect = (size: string) => {
    const newSelectedSizes = { S: false, M: false, L: false, J: false };
    newSelectedSizes[size] = true;
    setSelectedSize(size);
    setSelectedSizes(newSelectedSizes);
  };

  const handleCakeTypeSelect = (cakeType: string) => {
    setSelectedCakeType(cakeType);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedCakeType) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      let allSizesSelected = Object.values(selectedSizes).some(
        (size) => size === true
      );
      if (allSizesSelected) {
        setShowSuccessAlert(true);
        setSelectedSizes({
          S: false,
          M: false,
          L: false,
          J: false,
        });
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      } else {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    }
  };

  const handleReviewSubmit = () => {
    let reviewValid = true;

    // Kiểm tra tên người dùng
    if (
      !/^[\p{L}\s']+$/u.test(userName.trim()) ||
      userName.trim().length < 2 ||
      userName.trim().length > 64
    ) {
      reviewValid = false;
    }

    // Kiểm tra số điện thoại
    if (
      !/^[0-9()+-]*$/.test(phoneNumber.trim()) ||
      phoneNumber.trim().length < 10 ||
      phoneNumber.trim().length > 11 ||
      phoneNumber.trim().includes(" ")
    ) {
      reviewValid = false;
    }

    // Kiểm tra nội dung đánh giá
    if (reviewContent.trim().length < 50) {
      reviewValid = false;
    }

    // Kiểm tra đánh giá
    if (!rating || rating === 0) {
      reviewValid = false;
    }

    if (!reviewValid) {
      setShowReviewAlert(true);
      setTimeout(() => {
        setShowReviewAlert(false);
      }, 2000);
    } else {
      setShowReviewSuccessAlert(true);
      setTimeout(() => {
        setShowReviewSuccessAlert(false);
      }, 2000);
      setUserName("");
      setPhoneNumber("");
      setReviewContent("");
      setRating(0);
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen">
      {count < 2 && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={
              <span>
                <ExclamationCircleOutlined style={{ color: "orange" }} />{" "}
                {t("Warning")}{" "}
              </span>
            }
            description={t("AddMoreProductsForDiscount")}
            type="warning"
            closable
          />
        </motion.div>
      )}

      {showAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={
              <span>
                <ExclamationCircleOutlined style={{ color: "red" }} />{" "}
                {t("Error")}{" "}
              </span>
            }
            description={t("PleaseSelectCakeAndSize")}
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
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={t("Success")}
            description={t("ProductAddedToCart")}
            type="success"
            closable
            showIcon
          />
        </motion.div>
      )}

      {showReviewAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={
              <span>
                <ExclamationCircleOutlined style={{ color: "red" }} />{" "}
                {t("Error")}{" "}
              </span>
            }
            description={t("InvalidOrEmptyReviewInformation")}
            type="error"
            closable
            onClose={() => setShowReviewAlert(false)}
          />
        </motion.div>
      )}

      {showReviewSuccessAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={t("Success")}
            description={t("CommentHasBeenSubmitted")}
            type="success"
            closable
            showIcon
          />
        </motion.div>
      )}

      {showFavoriteAlert && (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 right-2 md:right-10 z-50"
        >
          <Alert
            message={t("Success")}
            description={t("ProductAddedToFavorites")}
            type="success"
            closable
            showIcon
          />
        </motion.div>
      )}

      <div className="breadcrumb-container bg-black text-white p-4">
        <Link to="/mainpage" className="text-white hover:text-gray-300">
          {t("Home")}
        </Link>
        <RightOutlined className="text-sm" />
        <Link to="/menu" className="text-white hover:text-gray-300">
          {t("Menu")}
        </Link>
        <RightOutlined className="text-sm" />
        <Link to="/menu" className="text-white hover:text-gray-300">
          {t("ColdCakes")}
        </Link>
        <RightOutlined className="text-sm" />
        <strong>
          <Link to="/" className="text-white hover:text-gray-300">
            Very Thai Cury
          </Link>
        </strong>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 justify-center items-center"
        style={{
          backgroundImage: `url(${bg_vegan})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div className="w-full lg:ml-40 p-8 text-white justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Vegan Thai Cury
          </h1>
          <p className="text-sm md:text-base mb-6">
            {t("ProductDescriptionShort")}
          </p>

          <div className="flex items-center mb-6">
            <p className="text-sm md:text-base mr-2">{t("Phân loại")}:</p>

            <Select
              style={{ width: 200 }}
              placeholder={t("SelectCakeType")}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "2",
                  label: t("HotCakes"),
                },
                {
                  value: "3",
                  label: t("ColdCakes"),
                },
              ]}
              onChange={(value) => handleCakeTypeSelect(value)}
            />
          </div>

          <div className="flex items-center mb-6">
            <div className="border border-white flex rounded-3xl">
              <button
                onClick={handleDecreaseCount}
                className="p-2 px-4 hover:bg-red-400 rounded-l-3xl"
              >
                -
              </button>
              <input
                type="text"
                className="p-2 w-16 border-1 text-center text-black"
                value={count}
                readOnly
              />
              <button
                onClick={handleIncreaseCount}
                className="p-2 px-4 hover:bg-red-400 rounded-r-3xl"
              >
                +
              </button>
            </div>
            <HeartOutlined
              onClick={handleAddToFavorite}
              className={`h-10 w-10 ml-4 text-red-500 border-2 border-gray-400 hover:bg-red-200 bg-white rounded-full flex items-center justify-center cursor-pointer ${
                favorite ? "fill-current" : ""
              }`}
            />
          </div>

          <div className="flex items-center mb-6">
            <p className="text-sm md:text-base mr-4">{t("Size")}:</p>
            <div className="flex">
              <button
                onClick={() => handleSizeSelect("S")}
                className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-3 ${
                  selectedSizes["S"] ? "bg-red-400 text-white" : ""
                }`}
              >
                S
              </button>
              <button
                onClick={() => handleSizeSelect("M")}
                className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-3 ${
                  selectedSizes["M"] ? "bg-red-400 text-white" : ""
                }`}
              >
                M
              </button>
              <button
                onClick={() => handleSizeSelect("L")}
                className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md mr-3 ${
                  selectedSizes["L"] ? "bg-red-400 text-white" : ""
                }`}
              >
                L
              </button>
              <button
                onClick={() => handleSizeSelect("J")}
                className={`hover:bg-red-400 border border-white font-bold text-sm px-3 py-2 rounded-md ${
                  selectedSizes["J"] ? "bg-red-400 text-white" : ""
                }`}
              >
                J
              </button>
            </div>
          </div>

          <Link to="/checkout">
            <button
              onClick={handleAddToCart}
              className="bg-red-500 hover:bg-red-400 text-white px-4 py-4 rounded-3xl mt-4"
            >
              {t("AddToCart")} <RightOutlined className="text-sm" />
            </button>
          </Link>
        </div>

        <div className="lg:mr-40 md:p-8 text-white justify-center items-center relative">
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-end relative">
              <img src={vegan} alt="Bánh" className="relative z-10 w-2/3" />
              <div className="absolute top-0 right-0 xl:mt-10 xl:mr-2 z-20">
                <div className="relative w-20 h-20 ">
                  <img src={badge} alt="Discount" className=" object-cover" />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <span
                      className="text-yellow-300 text-lg italic"
                      style={{ fontFamily: "Shadows Into Light" }}
                    >
                      20% off
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <ThunderboltOutlined
                className="text-yellow-300 "
                style={{ fontSize: "100px" }}
              />
              <div className="absolute top-0 right-0  md:mt-10 md:mr-2 z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 px-8 md:py-8 md:px-48">
        <div className="flex justify-start">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-8 py-2 text-lg ${
              activeTab === "description"
                ? "text-red-500 border-b-2 border-red-500 font-bold"
                : "text-gray-500"
            }`}
          >
            {t("Description")}
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`mx-6 px-8 py-2 text-lg ${
              activeTab === "review"
                ? "text-red-500 border-b-2 border-red-500 font-bold"
                : "text-gray-500"
            }`}
          >
            {t("Reviews")}
          </button>
        </div>

        <div className="mt-8 mr-8 min-h-8 ">
          {activeTab === "description" && (
            <>
              <p className="text-xl md:text-2xl mb-2 ">
                {t("ProductInformation")}
              </p>
              <ul className="list-disc pl-4 shadow-md border-2 px-4 py-6 rounded-lg">
                <p>
                  Găng tay thủ môn bóng đá có cổ tay để bảo vệ, Gri mạnh mẽ Các
                  tính năng: Thương hiệu mới và chất lượng Chất liệu: Găng tay
                  thủ môn được làm từ chất liệu cao su và nylon chất lượng, tạo
                  cảm giác thoải mái và bền bỉ. Nó sẽ giúp bạn kiểm soát tốt hơn
                  các đầu ngón tay của mình. Để bảo vệ thêm ngón tay: Không
                  giống như ngón tay để bảo vệ hầu hết các Găng tay thủ môn,
                  găng tay bóng đá của chúng tôi có thêm ngón tay để bảo vệ và
                  không bị cong về phía sau. Hiệu suất đệm tuyệt vời: Găng tay
                  bóng đá của chúng tôi có hiệu suất đệm tuyệt vời với độ đàn
                  hồi tốt. Chúng rất dễ dàng để mặc vào và cởi ra. Khả năng thở
                  tốt: Găng tay thủ môn của chúng tôi có khả năng thở tốt. Và
                  vải lưới thoáng khí sẽ giữ cho ngón tay của bạn luôn trong
                  tình trạng thoải mái và bảo vệ bàn tay của bạn. Năng động thời
                  trang: Thiết kế nổi 3D được lấp đầy với các chi tiết phản
                  chiếu màu huỳnh quang, làm cho nó bắt mắt và dễ nhìn hơn trong
                  các điều kiện tối hơn. Thông số kỹ thuật: Chất liệu: Nylon,
                  Cao su Màu sắc: đỏ / xanh lá cây / đen Tùy chọn loại: Số 6 /
                  Số 7 / Số 8 / Số 9 / Số 10 Kích thước: Như hình ảnh hiển thị
                  Gói bao gồm: 1 đôi găng tay Lưu ý: Xin vui lòng cho phép lỗi
                  1-2 cm do đo lường thủ công. xin hãy chắc chắn rằng bạn không
                  nhớ trước khi bạn trả giá. Do sự khác biệt giữa các màn hình
                  khác nhau, hình ảnh có thể không phản ánh màu sắc thực tế của
                  mặt hàng. Cảm ơn bạn!
                </p>
              </ul>
            </>
          )}

          {activeTab === "review" && (
            <>
              <h2 className="text-xl md:text-2xl mb-6">
                {t("AddYourComment")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="md:col-span-2 flex items-center mb-6">
                  <p className="sm:text-sm mr-4 mb-2 md:mb-0">
                    {t("YourRating")}:
                  </p>
                  <Rate
                    allowHalf
                    onChange={setRating}
                    value={rating}
                    className="mr-4"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:col-span-1">
                  <div className="mb-6 md:mr-4">
                    <p className="text-sm mb-2">{t("usernamereview")}</p>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded-md w-full "
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-6 ">
                    <p className="text-sm mb-2">{t("PhoneNumber")}</p>
                    <input
                      type="tel"
                      className="p-2 border border-gray-300 rounded-md w-full "
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:col-span-2 mb-6">
                  <p className="text-sm mb-2">{t("ReviewContent")}</p>
                  <textarea
                    rows={4}
                    className="p-6 border border-gray-300 rounded-md w-full"
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                  />
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <button
                    onClick={handleReviewSubmit}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    {t("SubmitComment")}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
