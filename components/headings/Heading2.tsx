import styles from './Headings.module.css';

export const Heading2 = (props :{ text: string}) => {
  return (
    <p className={`${styles.heading2}`}>{props.text}</p>
  )
}

export default Heading2