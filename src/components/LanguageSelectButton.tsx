import type { ChangeEvent } from "react";
import data from "../data.json";
import { useLanguage } from "../hooks/useLanguage";
import { SelectStyled } from "./styles";

type Language = keyof typeof data;

type LanguageSelectProps = {
  fixed?: boolean;
  isBannerOpen?: boolean;
};

export const LanguageSelectButton = ({
  fixed,
  isBannerOpen,
}: LanguageSelectProps) => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as Language;
    setLanguage(value);
  };

  return (
    <SelectStyled fixed={fixed} isBannerOpen={isBannerOpen}>
      <select id="language-select" value={language} onChange={handleChange}>
        {(Object.keys(data) as Language[]).map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </SelectStyled>
  );
};
