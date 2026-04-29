import { SecondPagePart, SecondPagePartContext } from "./styled";
import { Container } from "../../GlobalStyle";
import Sign from "../../assets/vectors/sign.png";
import Photo1 from "../../assets/image/photo1.jpg";

export const SecondPage = () => {
  return (
    <SecondPagePart>
      <Container>
        <SecondPagePartContext>
          <div>
            <img loading="lazy" src={Sign} alt="Sign" />
            <h4 data-aos="fade-left">
              Սիրով հրավիրում ենք Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան
              օրվան։
            </h4>
          </div>
        </SecondPagePartContext>
        <img
          data-aos="fade-right"
          src={Photo1}
          alt="Photo 1"
          className="rounded-[15px] grayscale"
        />
        <h2>14.06.2026</h2>
      </Container>
    </SecondPagePart>
  );
};
