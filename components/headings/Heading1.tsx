import styles from './Headings.module.css';

export const Heading1 = (props :{ text: string}) => {
  return (
    <p className={`${styles.heading1}`}>{props.text}</p>
  )
}

export default Heading1