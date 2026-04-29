import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restoran.jpg";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            // uniqueMargin={50}
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"11:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
          />
          <ThirdPageBlock
            ImageSrc={SvgChurch}
            number={"15:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Հովհաննես եկեղեցի"
          />

          <ThirdPageBlock
            className="secondBlock"
            // uniqueMargin={100}
            line={true}
            ImageSrc={SvgCouple}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Ադանա Ռեստորանային Համալիր"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Հովհաննես եկեղեցի"}
            mapSrc={
              "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRe7ftleHRuA2FlbQIxMABicmlkETExZHZnTmMxQVlta1VySjE1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnYUDVjZff5Tb0nGwD8EF1Ey7yp9rSS_VJGslzJFtmQ6BtO6Jnuu69ThQbpE_aem_gz0se2I_KHfTjYlQEfuMvg&FORM=FBKPL1&q=%D5%80%D5%80%2C+%D6%84.+%D4%B1%D6%80%D5%BF%D5%A1%D5%B7%D5%A1%D5%BF%2C+%D4%B5%D6%80%D6%87%D5%A1%D5%B6%D5%B5%D5%A1%D5%B6+%D5%AD%D5%B3%D5%B8%D6%82%D5%B2%D5%AB%2C+Artashat%2C+Armenia&cp=40.032292%7E44.473250&lvl=16&style=r"
            }
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Ադանա Ռեստորանային Համալիր"}
            mapSrc={
              "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRe7j1leHRuA2FlbQIxMABicmlkETFxd1BrNWpZazJBY1BKR1FSc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHt_CDqN6oz2MVIljzhTqkZWQ-DhN1gn3Y7n3-C6btrz3q1zeWcD8FVHdhNgv_aem_VminMb2Tx_VFq7460a91LA&FORM=FBKPL1&q=Erevan-Erasx+12+km%2C+Mkhchyan+0725%2C+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F%2C+Artashat%2C+Armenia&cp=39.957207%7E44.546934&lvl=13.9&style=r"
            }
          />
        </ForthPagePartContext>
      </Container>
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Հունիս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i - 1 == 12 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
