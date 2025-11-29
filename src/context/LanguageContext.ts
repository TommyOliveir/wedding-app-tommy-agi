import { createContext } from "react";
import data from "../data.json";

export type Language = keyof typeof data;

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
