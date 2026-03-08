import { useLanguage } from "../../hooks/useLanguage";
import { FooterStyled, MapscontainerStyled, MapsStyled } from "./styles";

export const Footer = () => {
  const { language } = useLanguage();
  const labels = {
    english: ["Church Ceremony", "Wedding Reception"],
    italiano: ["Cerimonia in Chiesa", "Banchetto"],
    magyar: ["Templomi szertartás", "Lakodalom"],
  };

  const [churchCeremony, weddingReception] = labels[language];

  return (
    <FooterStyled>
      <MapscontainerStyled>
        <MapsStyled>
          <h2>{churchCeremony}</h2>
          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: "block",
            }}
            src="/church_ceremony.jpg"
            alt="church_ceremony"
          />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.054365010521!2d20.137811076206056!3d46.26902387109856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474487fb59f40ff3%3A0x33271abc59ca491!2sSzegedi%20Piarista%20v%C3%A9rtan%C3%BAk%20temploma!5e0!3m2!1sen!2shu!4v1772381621381!5m2!1sen!2shu"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapsStyled>
        <MapsStyled>
          <h2>{weddingReception}</h2>

          <img
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: "block",
            }}
            src="/falu.jpg"
            alt="wedding_reception"
          />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.91041005118!2d20.202504776209647!3d46.33147287110136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4744634ed20584ab%3A0x3ace1a63072bc05e!2zQWxnecWRaSBGYWx1aMOheg!5e0!3m2!1sen!2shu!4v1763751186540!5m2!1sen!2shu"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </MapsStyled>
      </MapscontainerStyled>
      <p> @2026 Tommy & Ági</p>
    </FooterStyled>
  );
};
