import styles from './Headings.module.css';

export const Heading3 = (props :{ text: string}) => {
  return (
    <p className={`${styles.heading3}`}>{props.text}</p>
  )
}

export default Heading3