import styles from './PillStyles.module.css';

const ColoredPill = (props: { text: string }) => {
  return (
    <button className={`${styles.colored_pill} btn rounded-pill m-4`}>
        <span className={`${styles.colored_text} px-3`}>{props.text}</span>
    </button>
  )
}

export default ColoredPill