import ProfileGrid from "../../components/grid/ProfileGrid";
import Heading2 from "../../components/headings/Heading2";
import ColoredPill from "../../components/pills/ColoredPill";

export const CustomerFeedback = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center p-3">
        <ColoredPill text="Customer Feedback" />
      </div>
      <div className="d-flex justify-content-center p-3">
        <Heading2 text="Grow you business with delighed customers" />
      </div>
      <div className="p-5">
        <ProfileGrid />
      </div>
    </div>
  );
};

export default CustomerFeedback;
