import {
  Benefits,
  CustomerFeedback,
  Footer,
  GetStarted,
  NavBar,
  Offering,
  OurCustomer,
  PlanAndPrice,
  Process,
  RequestDemo,
  WhyPulse,
} from "../../layouts/index";

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <GetStarted />
      <Process />
      <WhyPulse />
      <Offering />
      <Benefits />
      <PlanAndPrice />
      <CustomerFeedback />
      <OurCustomer />
      <RequestDemo />
      <Footer />
    </div>
  );
};
