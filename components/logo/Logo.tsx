import styles from "./Logo.module.css";

export const Logo = (props:{data:{ imgUrl: string; }}) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 p-3">
      <img src={props.data.imgUrl} alt="logo" className={`${styles.logo}`} />
    </div>
  );
};

export default Logo;
