import { FooterStyled, MapsStyled } from "./styles";

export const Footer = () => {
  return (
    <FooterStyled>
      <MapsStyled>
        <h2>Church Ceremony</h2>

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

      <MapsStyled>
        <h2>Wedding Reception</h2>

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
    </FooterStyled>
  );
};
