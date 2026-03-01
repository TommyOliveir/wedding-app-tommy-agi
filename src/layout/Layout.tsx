import { Details } from "../components/Details";
import { Hero } from "../components/Hero";
import { LanguageSelect } from "../components/LanguageSelect";
import Modal from "../components/modal/Modal";
import { Footer } from "./footer/Footer";
import data from "../data.json";
import { useLanguage } from "../hooks/useLanguage";
import { useState } from "react";

export const Layout = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      {!isOpen && <LanguageSelect fixed />}
      <Hero />

      {/* <Details title="RSVP">
        <p>{data[language].rsvp}</p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScDD6VnVOEuuGV6nQRJEiAKhBPqr5aEkyBucuRc-tXLC-snMw/viewform?embedded=true"
          width="100%"
          height="537"
          frameBorder="1"
        ></iframe>
      </Details> */}
      {language === "magyar" && (
        <Details title="Lakodalmi visszajelzés">
          <p>{data[language].rsvp}</p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSethvscJSA6XYH_Mw5GRBtrVn_fY-d5X3Kh_sf8YML2n5s9WA/viewform?embedded=true"
            width="100%"
            height="537"
            frameBorder="1"
          >
            Loading…
          </iframe>
        </Details>
      )}

      <Details title={data[language].details.ceremony.heading}>
        <img style={{ width: "100px" }} src="/church.png" alt="church" />
        <h2>{data[language].details.ceremony.title}</h2>
        <p> {data[language].details.ceremony.description}</p>
        <h2>{data[language].details.ceremony.time}</h2>
        <p>{data[language].details.ceremony.description2}</p>
        <img style={{ width: "100px" }} src="/dinner.png" alt="" />
        <h2>{data[language].details.dinner.title}</h2>
        <p> {data[language].details.dinner.description}</p>
        <h2>{data[language].details.dinner.time}</h2>
        <p>{data[language].details.dinner.description2}</p>
        <img style={{ width: "100px" }} src="/dancing.png" alt="dancing" />
        <h2>{data[language].details.party.title}</h2>
        <h2>{data[language].details.party.time}</h2>
      </Details>

      <Details title={data[language].details.Szeged.heading}>
        <img style={{ width: "100px" }} src="/location.png" alt="location" />

        <p>
          {data[language].details.Szeged.description}
          <p>
            {data[language].details.Szeged.description2}
            <a
              href="https://maps.app.goo.gl/JiCk9U3RVeGXkGu47"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data[language].details.Szeged.station}
            </a>{" "}
            {data[language].details.Szeged.description3}
          </p>
        </p>
      </Details>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h4>{data[language].modalSelectLanguage}</h4>
        <LanguageSelect />
        <p>{data[language].modalTitle}</p>
      </Modal>

      {/* 
      <Details title="Schedule of Events">
        <img style={{ width: "100px" }} src="/church.png" alt="" />
        <h2>Mass Celebration</h2>
        <p>10:00 AM</p>
        <img style={{ width: "100px" }} src="/church.png" alt="" />
        <h2>Lunch Reception</h2>
        <p>12:00 PM </p>
      </Details> */}
      <Footer />
    </div>
  );
};
