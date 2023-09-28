import styled from "styled-components";
import sprite from "../../../assets/sprite.svg";
import { SuperButton } from "../button/superButton";
import { Typography } from "../typography/typography";
import { thems } from "../../thems";

type NavType = { name: string; link: string };
type ArrNavType = Array<NavType>;

export type FooterProps = {
  onClick?: () => void;
  navItems?: ArrNavType;
  isHidden?: boolean;
};

export const Header = ({ onClick, navItems, isHidden }: FooterProps) => {
  return (
    <Container>
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
              <a href={el.link}>
                <Typography variant="h6">{el.name}</Typography>
              </a>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px 20px;
  max-width: 100%;
  height: 88px;
  padding: 20px 24px;
  justify-content: space-between;
  align-items: center;
  background: #2a2c2e;
  border-radius: 20px;

   @media ${thems.media.tablet} {
     ul {
      display:none;
     }
     button {
      display:none;
     }
  }

`;

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
    & a {
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #f4d867;
      }

      & h6 {
        margin: 0px;
      }
    }
  }

`;
