import { GoArrowLeft } from "react-icons/go";

const BackArrow = ({ handlerFn, className }) => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <GoArrowLeft
      className={`cursor-pointer select-none ${className}`}
      onClick={handlerFn ? handlerFn : handleBack}
    ></GoArrowLeft>
  );
};

export default BackArrow;
