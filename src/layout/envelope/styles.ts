import { styled } from "@mui/system";

export const EnvelopeStyled = styled("img")({
  width: "100%",
  objectFit: "cover",
  top: 0,
  left: 0,
  // zIndex: 99999,
  "@media (min-width: 600px)": { top: 0 },
});

export const EnvelopeButtonStyled = styled("button")({
  color: "#426477",
  backgroundColor: "transparent",
  border: "solid 2px #96b2c0",
  fontSize: ".9rem",
  position: "absolute",
  top: "12%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  "&:hover": {
    border: "solid 3px #acd1e3",
  },

  "@media (min-width: 600px)": {
    top: "50%",
    fontSize: "1rem",
    padding: "0.5rem 2.5rem",
  },
});
