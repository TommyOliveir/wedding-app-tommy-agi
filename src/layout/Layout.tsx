import { Details } from "../components/Details";
import { Hero } from "../components/Hero";
import { LanguageSelect } from "../components/LanguageSelect";
import { Footer } from "./footer/Footer";
import data from "../data.json";
import Countdown from "react-countdown";
import { createRenderer } from "./countDown/CountDownRenderer";
import type { Language } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LayoutProps {
  isOpen: boolean;
  language: Language;
}

export const Layout = ({ isOpen, language }: LayoutProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 2000); // image 2
    const timer2 = setTimeout(() => setStep(2), 4000); // layout

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (step === 0) {
    return (
      <motion.img
        src="/envelop2.jpg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      // <img
      //   src="/envelop2.jpg"
      //   style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      //   />
      //   </>
    );
  }

  if (step === 1) {
    return (
      <motion.img
        src="/envelop4.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
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
        <img
          style={{ width: "100px", marginTop: "5rem" }}
          src="/church.png"
          alt="church"
        />
        <h2>{data[language].details.ceremony.title}</h2>
        <p> {data[language].details.ceremony.address}</p>
        <h2>{data[language].details.ceremony.time}</h2>
        <p>{data[language].details.ceremony.description2}</p>

        <img
          style={{ width: "100px", marginTop: "5rem" }}
          src="/dinner.png"
          alt=""
        />
        <h2>{data[language].details.dinner.title}</h2>
        <p> {data[language].details.dinner.description}</p>
        <h2>{data[language].details.dinner.time}</h2>
        <p>{data[language].details.dinner.description2}</p>
        <img
          style={{ width: "100px", marginTop: "5rem" }}
          src="/dancing.png"
          alt="dancing"
        />
        <h2>{data[language].details.party.title}</h2>
        <h2>{data[language].details.party.time}</h2>
        <p>{data[language].details.party.description}</p>
        <img
          style={{ width: "100px", marginTop: "5rem" }}
          src="/gift.png"
          alt="gift"
        />
        <h2>{data[language].details.gift.title}</h2>
        <p>{data[language].details.gift.description}</p>
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

      <Details title={data[language].details.countdown.heading}>
        <Countdown
          date={new Date("2026-06-13T13:30:00Z")}
          // renderer={renderer}
          renderer={createRenderer(language)}
        />
        {/* <Countdown date={new Date("2026-03-07T12:00:00")} renderer={renderer} /> */}
      </Details>

      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h4>{data[language].modalSelectLanguage}</h4>
        <LanguageSelect />
        <p>{data[language].modalTitle}</p>
        </Modal> */}

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
    </motion.div>
  );
};
