import React from "react";
import { EnvelopeContainerStyled, EnvelopeStyled } from "./styles";

interface EnvelopeProps {
  onOpen?: React.MouseEventHandler<HTMLElement>;
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <EnvelopeContainerStyled>
      <EnvelopeStyled
        src="/envelopWithText.png"
        alt="envelop"
        onClick={onOpen}
      />
      {/* <EnvelopeOpenStyled onClick={onOpen}>CLICK TO OPEN</EnvelopeOpenStyled> */}
    </EnvelopeContainerStyled>
  );
};
