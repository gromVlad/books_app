import styled from "styled-components";
import { thems } from "../../thems";
import { Typography } from "../../ui/typography/typography";
import sprite from "../../../assets/sprite.svg";

type BestBooksCardType = {
  onclick?: () => void;
};

export const BestBooksCard = ({ onclick }: BestBooksCardType) => {
  return (
    <Container onClick={onclick}>
      <StarSVG
        width="73"
        height="62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${sprite}#${"starCard"}`} />
      </StarSVG>
      <StarSVGTwo
        width="52"
        height="44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${sprite}#${"starSmall"}`} />
      </StarSVGTwo>
      <Typography variant="h4">The best books for a gift</Typography>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 697px;
  height: 192px;
  justify-content: center;
  align-items: center;
  padding: 68px 29px;
  color: ${thems.colors.white.whiteHighEmphasis};
  border-radius: 20px;
  background: ${thems.colors.black.blackbg};
  transition: ${thems.animation.card};
  cursor: pointer;

  & h4{
    text-transform: uppercase;
  }

  &:hover {
    background: ${thems.colors.yellow.yellow800};
    color: ${thems.colors.black.blackHighEmpathis};
    & svg{
      fill: ${thems.colors.yellow.yellow1000};
    }
  }
`;

const StarSVG = styled.svg`
  display: flex;
  position: absolute;
  top: 15%;
  left: 5%;
  fill:${thems.colors.black.buttonBg};
`;

const StarSVGTwo = styled.svg`
  display: flex;
  position: absolute;
  top: 50%;
  left: 5%;
  fill:${thems.colors.black.buttonBg};
`;