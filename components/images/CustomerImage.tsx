import custimg from "../../assets/images/customerimg.png";
import imgstyle from "./CustomerImage.module.css";

export const CustomerImage = () => {
  return (
    <img
      src={custimg}
      alt="customer-img"
      width={100}
      height={80}
      className={`${imgstyle.custimg}`}
    />
  );
};

export default CustomerImage;