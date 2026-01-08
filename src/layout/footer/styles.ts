import { styled } from "@mui/system";

export const FooterStyled = styled("div")({
  marginTop: "8rem",
  textAlign: "center",
  color: "white",
  width: "100%",
  padding: "1rem 0",
  backgroundColor: "#40695bff",
  "@media (min-width: 600px)": {
    // color: "green",
  },
});

export const MapscontainerStyled = styled("div")({
  "@media (min-width: 600px)": {
    display: "flex",
  },
});

export const MapsStyled = styled("div")({
  width: "100%",
  "@media (min-width: 600px)": {
    width: "50%",
  },
});
