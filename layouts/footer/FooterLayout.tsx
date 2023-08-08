import { Paragraphs, PulseLogo, HeadingSmall } from "../../components/index";
import parastyles from "../../components/paragraphs/Paragraphs.module.css";
import FooterLogo from "./FooterLogo";

export const Footer = () => {
  return (
    <div className="Footer m-5">
      <div className="row">
        <div className="col-lg-5">
          <div className="d-flex">
            <div className="pr-4 pt-4">
              <PulseLogo />
            </div>
            <div className={`${parastyles.fparg} ${parastyles.pulsefont} p-4`}>
              <HeadingSmall text="Pulse feedback" />
            </div>
          </div>
          <div className={`${parastyles.fparg} ${parastyles.pfont} col-lg-10`}>
            <Paragraphs text="Talented baby Squirrel Archmage Transcending through Regression, The Demon Lords martial arts ascension and I obtained a Mythic item." />
          </div>
        </div>
        <div className={`${parastyles.pfont} ${parastyles.pfont}  col-3 p-4`}>
          <Paragraphs text="About Us" />
          <Paragraphs text="Pricing" />
        </div>
        <div className={`${parastyles.pfont} col p-4`}>
          <Paragraphs text="Reach us at" />
          <div className={`${parastyles.link} ${parastyles.pfont}`}>
            <Paragraphs text="hello@tarento.com" />
          </div>
        </div>
      </div>
      <FooterLogo />
      <div className={`${parastyles.pfont} pt-5`}>
        <Paragraphs text="&#169; Pulse Feedback 2023" />
      </div>
    </div>
  );
};

export default Footer;
