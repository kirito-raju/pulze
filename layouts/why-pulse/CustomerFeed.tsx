import {
  Paragraphs,
  CustomerImage,
  RatingChecked,
  RatingUnchecked,
} from "../../components/index";
import parastyles from "../../components/paragraphs/Paragraphs.module.css";
import style from "./CustomerFeed.module.css";

export const CustomerFeed = () => {
  return (
    <div>
      <div className="position-absolute">
        <div className={`${style.circle}`} />
      </div>
      <div className={`${style.triangle}`} />
      <div className={`${style.stylebg} ${style.design}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex">
              <div className="pt-5 mt-4 mx-2 ps-3">
                <CustomerImage />
              </div>
              <div className="row pt-5 mt-4">
                <div
                  className={`${parastyles.paralarge} ${parastyles.paralefts} ${parastyles.semibold}`}
                >
                  <Paragraphs text="Dyan Holi" />
                </div>
                <div className={`${parastyles.paralefts} ${parastyles.pfont}`}>
                  <Paragraphs text="Former Employee, more than 1 year" />
                </div>
                <div className={`${parastyles.bold} ${parastyles.paralefts}`}>
                  <Paragraphs text="Work Life Balance" />
                </div>
                <div className={`${parastyles.paralefts} ${parastyles.pfont}`}>
                  <Paragraphs text="One of the top organisations with strong fundmentals in terms of both professional and personal growth" />
                </div>

                <div className="d-flex">
                  <div className={`${parastyles.pfont} ${parastyles.rating} mt-4`}>
                    <Paragraphs text="4.0" />
                  </div>
                  <div className="mt-4 ms-2">
                  <RatingChecked />
                  <RatingChecked />
                  <RatingChecked />
                  <RatingChecked />
                  <RatingUnchecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerFeed;
