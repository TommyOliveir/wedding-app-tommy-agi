import { styled } from "@mui/system";

export const EnvelopeContainerStyled = styled("div")({
  display: "grid",
  justifyItems: "center",
  width: "100%",
  padding: "6rem 1rem",
  // boxSizing: "border-box",

  //desktop
  "@media (min-width: 600px)": {},
});

export const EnvelopeStyled = styled("img")({
  width: "100%",
  objectFit: "cover",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  boxShadow: "0px 11px 9px -4px rgba(0,0,0,0.75)",
  "&:hover": {
    transform: "scale(0.98)",
  },
  //desktop
  "@media (min-width: 600px)": { top: 0, width: "50%" },
});

export const EnvelopeOpenStyled = styled("p")({
  color: "#426477",
  fontSize: ".9rem",
  position: "absolute",
  letterSpacing: "0.1rem",
  marginTop: "4rem",

  // desktop
  "@media (min-width: 600px)": {
    marginTop: "9rem",
    fontSize: "1.25rem",
    padding: "0.5rem 2.5rem",
  },
});
