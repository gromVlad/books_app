import styled from "styled-components";
import { SuperButton } from "../../ui/button/superButton";
import { thems } from "../../thems";
import sprite from "../../../assets/sprite.svg";

type BooksOfThedayType = {
  onClick?: () => void;
  onClickIcons?: () => void;
};

export const BooksOfTheday = ({ onClick, onClickIcons }: BooksOfThedayType) => {
  return (
    <>
      <Container>
        <div className="icons">
          <StarSVG width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${"star"}`} />
          </StarSVG>
          <CircleSVG width="73" height="73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${"circle"}`} />
          </CircleSVG>
        </div>
        <div className={"containerBtn"}>
          <SuperButton
            colorBack={thems.colors.black.blackbg}
            colorHover={thems.colors.black.gray}
            colorActive={thems.colors.black.blackbg}
            colorText={thems.colors.yellow.yellow500}
            colorTextActive={thems.colors.yellow.yellow500}
            variant="default"
            onClick={onClick}
          >
            MORE INFORMATION
          </SuperButton>
          <SuperButton
            colorBack={thems.colors.black.blackbg}
            colorHover={thems.colors.black.gray}
            colorActive={thems.colors.black.blackbg}
            colorText={thems.colors.yellow.yellow500}
            colorTextActive={thems.colors.yellow.yellow500}
            variant="shop"
            onClick={onClickIcons}
          />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  max-width: 596px;
  height: 348px;
  padding: 16px;
  background: grey;
  border-radius: 20px;

  & .containerBtn {
    display: flex;
    gap: 8px;
  }

  & .icons{
    position: relative;
    width:75px;
    height:75px;
    padding:2px;
    background: ${ thems.colors.black.blackbg };
    border-radius:50%;
  }

`;

const StarSVG = styled.svg`
  display:flex;
  position: absolute;
  top: 25%;
  left: 25%;
`;

const CircleSVG = styled.svg`
  position: absolute;
  z-index: 1;
`;