import { useLanguage } from "../hooks/useLanguage";
import {
  GeneralDateStyled,
  HeroStyled,
  HeroTextStyled,
  ImageHeroStyled,
  SilkenTextStyled,
} from "./styles";
import data from "../data.json";

export const Hero = () => {
  const { language } = useLanguage();

  return (
    <HeroStyled>
      <ImageHeroStyled />

      <HeroTextStyled>
        <p>{data[language].greeting1}</p>
        <div
          style={{ margin: "1rem 0", textAlign: "center", fontStyle: "italic" }}
        >
          <SilkenTextStyled>Ági</SilkenTextStyled>
          <p>{data[language].greeting2}</p>
          <SilkenTextStyled>Tommy</SilkenTextStyled>
        </div>
        <p>{data[language].greeting3}</p>
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "1rem 0",
            color: "#222221ff",
          }}
        >
          <p>{data[language].greeting4}</p>
        </p>
        <GeneralDateStyled>
          <p>{data[language].greeting5}</p>
          <p>{data[language].greeting6}</p>
          <p>{data[language].greeting7}</p>
          <p>{data[language].greeting8}</p>
        </GeneralDateStyled>
      </HeroTextStyled>
    </HeroStyled>
  );
};
