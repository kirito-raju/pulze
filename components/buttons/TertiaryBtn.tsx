import styles from "./BtnStyles.module.css";

export const TertiaryBtn = (props: { text: string }) => {
  return (
    <button className={`${styles.teal} ${styles.tealfont} btn`}>
      {props.text}
    </button>
  );
};

export default TertiaryBtn;
