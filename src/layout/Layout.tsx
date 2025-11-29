// import { Details } from "../components/Details";
import { Hero } from "../components/Hero";
import { LanguageSelect } from "../components/LanguageSelect";
import Modal from "../components/modal/Modal";
// import { Footer } from "./footer/Footer";
import data from "../data.json";
import { useLanguage } from "../hooks/useLanguage";
import { useState } from "react";

export const Layout = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      {!isOpen && <LanguageSelect absolute />}
      <Hero />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h4>{data[language].modalSelectLanguage}</h4>
        <LanguageSelect />
        <p>{data[language].modalTitle}</p>
      </Modal>
      {/* <Details title="The Details">
        <h2>Wedding Ceremony</h2>
        <p> Nuptial Mass at Szeged Piarist High School Monastery Church</p>
        <p>
          Szeged is Ági's hometown, where she grew up on the Great Hungarian
          Plain, surrounded by calm landscapes and endless horizons. Tommy,
          originally from the Philippines, comes from a life by the sea. Though
          he sometimes misses the ocean, the wide, open horizon of Szeged gives
          him a nostalgic reminder of the horizon of the sea he once knew.
        </p>
        <h2>Reception</h2>
        <p>Algyői Faluház (6750 Algyő, Búvár u. 5.)</p>

        <h2>Transportation</h2>
        <p>
          Szeged is in the southeastern part of Hungary, in the Southern Great
          Plain region. Encyclopedia Britannica +2 Invest Szeged +2 It lies on
          both banks of the Tisza River, near its confluence with the Maros
          (Mureș) River.
          <p>
            {" "}
            How to get to Szeged: Go to Budapest-Nyugati Railway Station Take
            the InterCity train to Szeged (approx. 2.5 hours).
          </p>
        </p>
        <h2>Accomodation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          facere dolor! Accusantium veniam tenetur doloremque iure similique
          modi nobis facilis suscipit laudantium ex illo, maiores eum velit
          error dolorem natus.
        </p>
      </Details> */}
      {/* <Details title="Schedule of Events">
        <img style={{ width: "100px" }} src="/church.png" alt="" />
        <h2>Mass Celebration</h2>
        <p>10:00 AM</p>
        <img style={{ width: "100px" }} src="/church.png" alt="" />
        <h2>Lunch Reception</h2>
        <p>12:00 PM </p>
      </Details> */}
      {/* <Footer /> */}
    </div>
  );
};
