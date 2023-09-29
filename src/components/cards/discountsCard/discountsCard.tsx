import styled from "styled-components";
import { thems } from "../../thems";
import { Typography } from "../../ui/typography/typography";

type DiscountsCardType = {
  onclick?: () => void;
};

export const DiscountsCard = ({ onclick }: DiscountsCardType) => {
  return (
    <Container onClick={onclick}>
      <Icons>%</Icons>
      <IconsTwo>%</IconsTwo>
      <Typography variant="h4">DISCOUNTS</Typography>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  width: 495px;
  height: 192px;
  justify-content: center;
  align-items: center;
  padding: 68px 29px;
  color: ${thems.colors.white.whiteHighEmphasis};
  border-radius: 20px;
  background: ${thems.colors.black.blackbg};
  transition: ${thems.animation.card};
  cursor: pointer;

  &:hover {
    background: ${thems.colors.yellow.yellow800};
    color: ${thems.colors.black.blackHighEmpathis};
    & span {
      color: ${thems.colors.yellow.yellow1000};
    }
  }
`;
const Icons = styled.span`
  position: absolute;
  font-size: 163.978px;
  top: -20%;
  left: -6%;
  color: ${thems.colors.black.buttonBg};
`;

const IconsTwo = styled.span`
  position: absolute;
  font-size: 83.144px;
  top: 65%;
  left: 15%;
  color: ${thems.colors.black.buttonBg};
`;
