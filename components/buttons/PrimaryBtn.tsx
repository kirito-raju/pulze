import styles from "./BtnStyles.module.css";
import arrowIcon from "../../assets/icons/Icon metro-arrow-right.png";

export const PrimaryBtn = (props: { text: string }) => {
  return (
    <button
      className={`${styles.primary} btn btn-primary border-0`}
      type="submit"
    >
      <div className="d-flex align-items-center">
        <h5 className="mt-2 px-2">{props.text}</h5>
        <img
          src={arrowIcon}
          alt="arrow-icon"
          width="20"
          height="14"
          className="d-inline-block align-text-top"
        />
      </div>
    </button>
  );
};

export default PrimaryBtn;
