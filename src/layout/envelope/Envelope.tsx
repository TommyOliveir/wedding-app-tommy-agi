import React from "react";
import { EnvelopeButtonStyled, EnvelopeStyled } from "./styles";

interface EnvelopeProps {
  onOpen?: React.MouseEventHandler<HTMLElement>;
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <div>
      <EnvelopeStyled src="/envelop.png" alt="envelop" />

      <EnvelopeButtonStyled onClick={onOpen}>OPEN</EnvelopeButtonStyled>
    </div>
  );
};
