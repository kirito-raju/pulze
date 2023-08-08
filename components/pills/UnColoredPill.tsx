import styles from "./PillStyles.module.css";

export const UnColoredPill = (props: {
  data: {
    text:
      | string;
  };
}) => {
  return (
    <button className={`${styles.white} btn rounded-pill`}>
      {props.data.text}
    </button>
  );
};

export default UnColoredPill;
