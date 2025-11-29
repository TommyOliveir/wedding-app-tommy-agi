import type { ChangeEvent } from "react";
import data from "../data.json";
import { useLanguage } from "../hooks/useLanguage";
import { SelectStyled } from "./styles";

type Language = keyof typeof data;

type LanguageSelectProps = {
  absolute?: boolean;
};

export const LanguageSelect = ({ absolute }: LanguageSelectProps) => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as Language;
    setLanguage(value);
  };

  return (
    <SelectStyled absolute={absolute}>
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
