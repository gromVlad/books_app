import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";
import { Typography } from "../../components/ui/typography/typography";
import { SuperButton } from "../../components/ui/button/superButton";
import { thems } from "../../components/thems";
import sprite from "../../assets/sprite.svg";
import { Container } from "../../components/ui/container/container";

type NavType = { name: string; link: string };
type ArrNavType = Array<NavType>;

export type FooterProps = {
  onClick?: () => void;
  navItems?: ArrNavType;
  isHidden?: boolean;
};

export const Header = ({ onClick, navItems }: FooterProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container >
      <Block>
      <ContainerH isActive={isActive}>
        <svg
          width="166"
          height="44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"logo"}`} />
        </svg>
        <Content>
          {navItems?.map((el) => {
            return (
              <li>
                <Link
                  activeClass="active"
                  to={el.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleClick}
                >
                  <Typography variant="h6">{el.name}</Typography>
                </Link>
              </li>
            );
          })}
        </Content>
        <SuperButton
          colorBack={thems.colors.yellow.yellow500}
          colorHover={thems.colors.yellow.yellow900}
          colorActive={thems.colors.black.gray}
          colorText={thems.colors.black.blackHighEmpathis}
          colorTextActive={thems.colors.yellow.yellow500}
          variant={"default"}
          onClick={onClick}
        >
          <Typography variant="buttonOrTab">Login</Typography>
        </SuperButton>
        <BurgerContainer
          className={"burger"}
          onClick={handleClick}
          isActive={isActive}
        >
          <BurgerBar />
          <BurgerBar />
          <BurgerBar />
          <BurgerBar />
        </BurgerContainer>
      </ContainerH>
    </Block>
    </Container>
  );
};

const Block = styled.div`
  display:flex;
  justify-content: center;
  padding:24px;
`

export type ContentProps = {
  isActive: boolean;
};

const ContainerH = styled.div<ContentProps>(
  ({ isActive }) => `
  display: flex;
  gap: 10px 20px;
  max-width: 1200px;
  width:100%;
  height: 88px;
  padding: 20px 24px;
  justify-content: space-between;
  align-items: center;
  background: #2a2c2e;
  border-radius: 20px;

  @media ${thems.media.tablet} {
    ul {
     display: ${isActive ? "flex" : "none"};
     position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #2a2c2e;
      z-index: 5;
    }
    button {
      display: ${isActive ? "flex" : "none"};
      position: fixed;
      top:80%;
      left: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 5;
    }
    .burger{
      display: block;
      ${
        isActive &&
        `
      position: fixed;
      top: 15%; right: 5%;
      `
      }
    }



  }
`
);

const Content = styled.ul`
  display: flex;
  gap: 10px 40px;
  flex-wrap: wrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  justify-content: center;
  align-items: center;
  transition: ${thems.animation.card};

  & li {
    list-style-type: none;
    cursor:pointer;
      &:hover {
        color: #f4d867;
      }

      & h6 {
        margin: 0px;
      }
    }
  }

  & .active{
    color: #f4d867;
  }

`;

export type BurgerContainerProps = {
  isActive: boolean;
};

const BurgerContainer = styled.div<BurgerContainerProps>(
  ({ isActive }) => `
  display:none;
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 6;

  ${
    isActive &&
    `
    span:nth-child(1) {
      top: 9px;
      transform: rotate(135deg);
    }

    span:nth-child(2) {
      opacity: 0;
      left: -30px;
    }

    span:nth-child(3) {
      display:none;
    }

    span:nth-child(4) {
      top: 9px;
      transform: rotate(-135deg);
    }
  `
  }
`
);

const BurgerBar = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  position: absolute;
  opacity: 1;
  left: 0;
  transition: 0.25s ease-in-out;

  &:nth-child(1) {
    top: 0px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 9px;
  }

  &:nth-child(4) {
    top: 18px;
  }
`;
