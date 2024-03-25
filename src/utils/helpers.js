import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
export const renderStarFromNumber = (number, size) => {
  const integerPart = Math.floor(number);
  const decimalPart = number - integerPart;

  const stars = [];
  if (!Number(number)) {
    for (let i = 0; i < 5; i++) {
      stars.push(<FaRegStar key={i} color="orange" size={size || 16} />);
    }
    return stars;
  }

  for (let i = 0; i < 5; i++) {
    if (i < integerPart) {
      stars.push(<FaStar key={i} color="orange" size={size || 16} />);
    } else if (i === integerPart && decimalPart > 0) {
      stars.push(<FaStarHalfAlt key={i} color="orange" size={size || 16} />);
    } else {
      stars.push(<FaRegStar key={i} color="orange" size={size || 16} />);
    }
  }
  return stars;
};
export const formatPrice = (number) => Math.round(number / 1000) * 1000;
export const formatMoney = (number) =>
  Number(number?.toFixed(1)).toLocaleString();
