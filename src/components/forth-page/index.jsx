import { Container, Flexible } from "../../GlobalStyle";
import Church from "../../assets/image/church.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import { ForthPagePart } from "./styled";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <div className="relative">
          <img
            src={PHoto3}
            alt="Photo 3"
            className="rounded-[15px] grayscale"
          />
          <img
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            className="absolute top-1.5 left-1.5 w-[130px]"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
      <div style={{ margin: "55px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <Container>
        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Ռաֆայել և Ռոզի
        </h2>
      </Container>
    </ForthPagePart>
  );
};
