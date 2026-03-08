import React from "react";
import {
  EnvelopeOpenStyled,
  EnvelopeContainerStyled,
  EnvelopeStyled,
} from "./styles";

interface EnvelopeProps {
  onOpen?: React.MouseEventHandler<HTMLElement>;
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <EnvelopeContainerStyled>
      <EnvelopeStyled src="/e.png" alt="envelop" onClick={onOpen} />
      <EnvelopeOpenStyled onClick={onOpen}>CLICK TO OPEN</EnvelopeOpenStyled>
    </EnvelopeContainerStyled>
  );
};
