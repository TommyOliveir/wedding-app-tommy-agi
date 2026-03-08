import { styled } from "@mui/system";
import { motion } from "framer-motion";

export const EnvelopeImageWrapper = styled("div")({
  width: "100%",
  padding: "6rem 1rem",

  "@media (min-width: 600px)": { padding: "6rem 1rem" },
});

export const EnvelopeImageWrapper2 = styled("div")({
  width: "100%",
  padding: "2rem 1rem",

  "@media (min-width: 600px)": {},
});

export const EnvelopeImage = styled(motion.img)({
  width: "100%",
  objectFit: "cover",
  display: "block",
  boxShadow: "0px 11px 9px -4px rgba(0,0,0,0.75)",

  "@media (min-width: 600px)": {
    width: "50%",
    margin: "0 auto 0 auto",
  },
});

export const EnvelopeImage2 = styled(motion.img)({
  width: "100%",
  objectFit: "cover",
  display: "block",

  "@media (min-width: 600px)": {
    width: "50%",
    margin: "0 auto 0 auto",
  },
});
