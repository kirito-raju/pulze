import styles from './Cards.module.css';

const BenefitsCard = (props: { data: { text: string; imgUrl: string } }) => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div>
                    <p className={`${styles.card_text}`}>{props.data.text}</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className={`${styles.img_box} border rounded-0 d-flex justify-content-center`}>
                    <img className="img-fluid" src = {props.data.imgUrl}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BenefitsCard