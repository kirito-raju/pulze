import styles from './Paragraphs.module.css'

const Para1 = (props :{ text: string}) => {
  return (
    <p className={`${styles.para1}`}>{props.text}</p>
  )
}

export default Para1