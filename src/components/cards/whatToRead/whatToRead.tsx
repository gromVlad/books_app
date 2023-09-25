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
            colorBack={thems.colors.black.gray2}
            colorHover={thems.colors.black.gray2} 
            colorActive={thems.colors.black.blackbg}
            colorIcons={thems.colors.black.blackbg}
            colorIconsActive={thems.colors.yellow.yellow500}
            onClick={onClick}
          />
        </div>
        <div className={"iconBack"}>
          <svg
            width="400"
            height="500"
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
  position: relative;
  width: 95%;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: 348px;
  padding: 24px;
  align-items: flex-start;
  border-radius: 20px;
  color: white;
  justify-content: space-between;
  background: ${thems.colors.black.blackbg};
  transition: ${thems.animation.card};

  &:hover {
    background: ${thems.colors.yellow.yellow800};
    color: black;
  }

  & .content{
    margin-right: auto;
  }

  & .header h4 {
    margin: 0px;
  }
  & .text {
    max-width: 500px;
  }

  & .iconBack svg{
    position: absolute;
    right: 17%;
    top: 0;
    z-index:1;
  }
`;
