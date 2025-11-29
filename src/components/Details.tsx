import type { ReactNode } from "react";
import { DetailsSectionStyled, SilkenTextStyled } from "./styles";

interface IchildrenProps {
  title: string;
  children?: ReactNode;
}

export const Details = ({ title, children }: IchildrenProps) => {
  return (
    <DetailsSectionStyled>
      <h2 style={{ textAlign: "center" }}>
        <SilkenTextStyled>{title}</SilkenTextStyled>
      </h2>
      {children}
    </DetailsSectionStyled>
  );
};
