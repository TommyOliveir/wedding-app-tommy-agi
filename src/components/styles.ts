import { styled } from "@mui/system";
import heroImg from "../assets/pic3.png";
import bgoImg from "../assets/herobg.png";

// export const HeroStyled = styled("div")({
//   backgroundImage: `url(${bgoImg})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   justifyContent: "center",
//   width: "100%",
//   margin: "0 auto",
//   height: "100vh",
//   display: "flex",
//   "@media (max-width: 600px)": {
//     flexDirection: "column",
//     height: "100%",
//   },
// });

// ...existing code...
export const HeroStyled = styled("div")({
  position: "relative",
  overflow: "hidden",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto",
  height: "100vh",
  display: "flex",
  // background placed in ::before so only it can get opacity
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${bgoImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 1, // desktop default
    zIndex: -1,
    pointerEvents: "none",
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    height: "100%",
    // lower only the background opacity on mobile
    "&::before": {
      opacity: 0.35,
    },
    // target img children if needed
    "& img": {
      opacity: 0.5,
    },
  },
});
// ...existing code...

export const ImageHeroStyled = styled("div")({
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "50%",
  height: "100%",
  marginBottom: "20px",
  "@media (max-width: 600px)": {
    width: "100%",
    height: "500px",
    backgroundSize: "contain",
  },
});

export const HeroTextStyled = styled("div")({
  backgroundPosition: "left top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "20rem",
  fontFamily: "'Petunia', serif",
  color: "#41413fff",
  padding: "3rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: 400,
  fontSize: "1.2rem",
  letterSpacing: "0.05em",
  width: "50%",
  boxSizing: "border-box",
  textAlign: "center",
  "@media (max-width: 600px)": {
    width: "100%",
  },
  "& p": {
    margin: 0,
    padding: 0,
  },
});

export const SilkenTextStyled = styled("p")({
  fontFamily: "'MonteCarlo', cursive",
  fontWeight: 800,
  fontStyle: "normal",
  fontSize: "4em",
  color: "#222221ff",
});

export const GeneralDateStyled = styled("div")({
  fontStyle: "italic",
  textAlign: "center",
});

// Details styles
export const DetailsSectionStyled = styled("div")({
  padding: "2rem",
  textAlign: "center",
  "@media (min-width: 600px)": {
    padding: "4rem 9rem",
  },
});

// ...existing code...
// export const SelectStyled = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   gap: "0.5rem",
//   alignItems: "flex-start",
//   width: "200px",
//   margin: "0.5rem 0",
//   position: "absolute",
//   top: "1rem",
//   left: "1rem",
//   zIndex: 99999999,

//   // style the native select inside this wrapper
//   "& select": {
//     padding: "0.5rem 0.75rem",
//     fontSize: "1rem",
//     lineHeight: 1.2,
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     backgroundColor: "#ffffff",
//     zIndex: 99999999,
//     color: "#222222",
//     appearance: "none",
//     WebkitAppearance: "none",
//     MozAppearance: "none",
//     cursor: "pointer",
//     outline: "none",
//     transition: "border-color 150ms ease, box-shadow 150ms ease",
//     boxSizing: "border-box",
//     "@media (min-width: 600px)": {
//       // backgroundColor: "#a51b1bff",
//     },
//   },

//   "& select:focus": {
//     borderColor: "#2acf75ff",
//     boxShadow: "0 0 0 4px rgba(173,46,46,0.08)",
//   },

//   "& option": {
//     padding: "0.25rem 0.5rem",
//   },

//   "@media (max-width: 600px)": {
//     maxWidth: "100%",
//     width: "100%",
//   },
// });

export const SelectStyled = styled("div")<{ absolute?: boolean }>(
  ({ absolute }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "flex-start",
    width: "200px",
    margin: "0.5rem 0",

    // Apply absolute positioning only when "absolute" prop is true
    ...(absolute && {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      zIndex: 99999999,
    }),

    "& select": {
      padding: "0.5rem 0.75rem",
      fontSize: "1rem",
      lineHeight: 1.2,
      borderRadius: "8px",
      border: "1px solid #ccc",
      backgroundColor: "#ffffff",
      zIndex: 99999999,
      color: "#222222",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      cursor: "pointer",
      outline: "none",
      transition: "border-color 150ms ease, box-shadow 150ms ease",
      boxSizing: "border-box",

      "@media (min-width: 600px)": {},
    },

    "& select:focus": {
      borderColor: "#2acf75ff",
      boxShadow: "0 0 0 4px rgba(173,46,46,0.08)",
    },

    "& option": {
      padding: "0.25rem 0.5rem",
    },

    "@media (max-width: 600px)": {
      width: "fit-content",
    },
  })
);
