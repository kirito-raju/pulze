import shape from "./Rectangle.module.css";

export const Rectangle = () => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 p-3">
      <div className={`${shape.rectangle}`}></div>
    </div>
  );
};
