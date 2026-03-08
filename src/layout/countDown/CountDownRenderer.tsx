import type { CountdownRenderProps } from "react-countdown";
import { CountdownStyled } from "./styles";

type Language = "english" | "italiano" | "magyar";

export const createRenderer = (language: Language) => {
  return ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <h1>Wedding Day!</h1>;
    }

    const labels = {
      english: ["d", "h", "m", "s"],
      italiano: ["g", "h", "m", "s"],
      magyar: ["n", "ó", "p", "mp"],
    };

    const [d, h, m, s] = labels[language];

    return (
      <CountdownStyled>
        {`${days} ${d} ${hours} ${h} ${minutes} ${m} ${seconds} ${s}`}
      </CountdownStyled>
    );
  };
};
