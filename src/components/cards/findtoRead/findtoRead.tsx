import styled from "styled-components";
import { Typography } from "../../ui/typography/typography";
import { SuperButton } from "../../ui/button/superButton";
import { thems } from "../../thems";
import sprite from "../../../assets/sprite.svg"

export const FindtoRead = () => {
  return (
    <>
      <Container>
        <div className={"header"}>
        <Typography variant="h4">FIND SOMETHING TO READ</Typography>
       </div>
        <div className={"text"}>
          <Typography variant="body1">
            Fancy something unusual and unpredictable? Funny or exciting? No
            problem. Check out the collections we have prepared for you.
          </Typography>
        </div>
        <SuperButton
          colorBack={thems.colors.black.gray2}
          colorHover={thems.colors.black.gray}
          colorActive={thems.colors.black.blackbg}
          colorText={"#000000DE"}
          colorTextActive={"#F4CE47"}
          variant="default"
        >
          BROWSE NOW
        </SuperButton>
        <svg
          width="259" 
          height="299"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"find"}`} />
        </svg>
      </Container>
    </>
  );
};

const Container = styled.div`
  cursor:pointer;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 596px;
  height: 348px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  color: white;
  background: ${thems.colors.black.blackbg};

  &:hover {
    background: ${thems.colors.yellow.yellow800};
    color:black;
  }

  & .header{
    width: 300px
  }

  & .text {
    width: 350px;
  }

  & svg{
    position: absolute;
    right:0;
    top:40px;
    stroke:${thems.colors.black.buttonBg};
  }

`;
