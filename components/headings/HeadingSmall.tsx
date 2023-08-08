import styles from './Headings.module.css';

export const HeadingSmall = (props :{ text: string}) => {
  return (
    <h5 className={`${styles.headingsmall}`}>{props.text}</h5>
  )
}

export default HeadingSmall