import { styled } from "@mui/system";

export const FooterStyled = styled("div")({
  marginTop: "8rem",
  textAlign: "center",
  color: "red",
  width: "100%",
  // backgroundColor: "#810606ff",
  "@media (min-width: 600px)": {
    color: "green",
    display: "flex",
  },
});

export const MapsStyled = styled("div")({
  width: "100%",
  "@media (min-width: 600px)": {
    width: "50%",
  },
});
