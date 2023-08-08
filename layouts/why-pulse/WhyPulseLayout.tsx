import { Paragraphs } from "../../components/index";
import styles from "../../components/buttons/BtnStyles.module.css";
import headstyles from "../../components/headings/Headings.module.css";
import parastyles from "../../components/paragraphs/Paragraphs.module.css";
import CustomerFeed from "./CustomerFeed";
import Heading2 from "../../components/headings/Heading2";
import ColoredPill from "../../components/pills/ColoredPill";

export const WhyPulse = () => {
  return (
    <div className="Section pt-5">
      <div className="row">
        <div className="col-lg-5 col-md-8 col-sm-12 ps-5">
          <CustomerFeed />
        </div>
        <div className="cust col-lg-7 ps-5 mb-1 mt-5">
          <div className={`${styles.leftbtn}`}>
            {<ColoredPill text="Why pulse feedback" />}
          </div>
          <div className="clearfix"></div>
          <div className={`${headstyles.headstyle_left}`}>  
            <Heading2 text="Turn customer interactions" />
          </div>
          <div
            className={`${headstyles.headstyle_left}`}
          >
            <Heading2 text="into actionable insights" />
          </div>
          <div className={`${parastyles.paraleft} ${parastyles.pfont} mt-5`}>
            <Paragraphs text="Ichigo Kurosaki never asked for the ability to see ghosts. He was a normal High school student and delinquent." />
            <Paragraphs text="When his family is attacked by a Hollow and Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPulse;
