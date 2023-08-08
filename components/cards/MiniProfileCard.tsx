import styles from './Cards.module.css';

const MiniProfileCard = (props: { data: { dp: string; name: string; designation: string; title: string; description: string; } }) => {
  return (
    <div className='col-lg-4 col-md-6 py-3'>
      <div className={`${styles.pro_card} card`}>
        <div className="d-flex">
            <div className="d-flex align-items-center">
                <img className={`${styles.pro_img} img-fluid`} src={props.data.dp}/>
            </div>
            <div className="mt-3 ps-3">
                <div className="pt-3">
                    <h4 className={`${styles.name}`}>{props.data.name}</h4>
                </div>
                <div className="">
                    <p className={`${styles.designation}`}>{props.data.designation}</p>
                </div>
            </div>
        </div>
        <div className="">
            <h3 className={`${styles.title}`}>{props.data.title}</h3>
        </div>
        <div className="">
            <p className={`${styles.description}`}>{props.data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default MiniProfileCard