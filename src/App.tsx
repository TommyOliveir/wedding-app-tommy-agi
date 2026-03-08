// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import { Envelope } from "./layout/envelope/Envelope";
import { Layout } from "./layout/Layout";
import Modal from "./components/modal/Modal";
import { useLanguage } from "./hooks/useLanguage";
import data from "./data.json";
import { LanguageSelect } from "./components/LanguageSelect";

function App() {
  const [isOpenEnvelope, setIsOpenEnvelope] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { language } = useLanguage();

  return isOpenEnvelope ? (
    <Layout isOpen={isOpen} language={language} />
  ) : (
    <>
      <Envelope onOpen={() => setIsOpenEnvelope(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h4>{data[language].modalSelectLanguage}</h4>
        <LanguageSelect />
        <p>{data[language].modalTitle}</p>
      </Modal>
    </>
  );
}

export default App;
