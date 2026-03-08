import styled from "@emotion/styled";

export const ModalStyled = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  background: "#ffffff",
  borderRadius: "10px",
  zIndex: 100000,
  color: "#222221ff",
  "@media (min-width: 600px)": {
    width: "600px",
  },
});
