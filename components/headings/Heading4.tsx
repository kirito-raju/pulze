import styles from './Headings.module.css';

export const Heading4 = (props :{ text: string}) => {
  return (
    <p className={`${styles.heading4}`}>{props.text}</p>
  )
}

export default Heading4