import styled from "styled-components";
import { Typography } from "../../ui/typography/typography";
import { thems } from "../../thems";
import sprite from "../../../assets/sprite.svg";
import { SuperButtonBig } from "../../ui/buttonBig/superButtonBig";

type WhatToReadType = {
  onClick?: () => void;
};

export const WhatToRead = ({ onClick }: WhatToReadType) => {
  return (
    <>
      <Container>
        <div className={"content"}>
          <div className={"header"}>
            <Typography variant="h4">FIND SOMETHING TO READ</Typography>
          </div>
          <div className={"text"}>
            <Typography variant="body1">
              You’re in the right place. Tell us what titles or genres you’ve
              enjoyed in the past, and we’ll give you surprisingly insightful
              recommendations.
            </Typography>
          </div>
        </div>
        <div className={"btn"}>
          <SuperButtonBig
            variant={"icon"}
            colorBack={thems.colors.yellow.yellow500}
            colorHover={thems.colors.black.blackbg}
            colorActive={thems.colors.black.blackbg}
            colorText={"#000000DE"}
            colorTextActive={"#F4CE47"}
            colorIcons={thems.colors.black.blackbg}
            colorIconsActive={thems.colors.yellow.yellow500}
            onClick={onClick}
          />
        </div>
        <div className={"iconBack"}>
          <svg
            width="289"
            height="401"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${sprite}#${"question"}`} />
          </svg>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 80%;
  max-height: 348px;
  padding: 24px;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  color: white;
  justify-content: space-between;
  background: ${thems.colors.black.blackbg};
  transition: ${thems.animation.card};

  &:hover {
    background: ${thems.colors.yellow.yellow800};
    color: black;
  }

  & .btn{
    z-index:2;
  }

  & .header h4 {
    margin: 0px;
  }
  & .text {
    max-width: 500px;
  }

  & .iconBack svg{
    position: absolute;
    right: 400px;
    top: 15px;
    z-index:1;
  }
`;
