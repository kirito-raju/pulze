import styles from "./BtnStyles.module.css";

const SecondaryBtn = (props: { text: string }) => {
  return (
    <button
      className={`${styles.primary} btn btn-primary border-0`}
      type="submit"
    >
      <div className="d-flex align-items-center">
        <h5 className="m-2">{props.text}</h5>
      </div>
    </button>
  );
};

export default SecondaryBtn;
