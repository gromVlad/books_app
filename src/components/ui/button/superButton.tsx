import styled from "styled-components";
import sprite from "../../../assets/sprite.svg"
import { ReactNode } from "react";


export type SuperButtonProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?: string;
  disable?: boolean;
  colorText?: string;
  colorTextActive?: string;
  variant: "default" | "shop" | 'link';
  children?:ReactNode;
  onClick?:() => void;
  href?:string;
};

export const SuperButton = ({ colorBack, colorHover, colorActive, disable, colorText, colorTextActive, variant, children, onClick, href }: SuperButtonProps) => {
  return(
    <>
      {variant === "default" && <ButtonDef
        colorBack={colorBack}
        colorHover={colorHover}
        colorActive={colorActive}
        colorText={colorText}
        colorTextActive={colorTextActive}
        onClick={onClick}
        disable={disable}
      >
        {children}
      </ButtonDef>
}
      {variant === "shop" && <ButtonIcon
        colorBack={colorBack}
        colorHover={colorHover}
        colorActive={colorActive}
        colorText={colorText}
        colorTextActive={colorTextActive}
        onClick={onClick}
      >
        <svg
          width="56"
          height="56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"btn"}`} />
        </svg>{" "}
      </ButtonIcon>
 }
      {variant === "link" && <ButtonDef
        colorBack={colorBack}
        colorHover={colorHover}
        colorActive={colorActive}
        colorText={colorText}
        colorTextActive={colorTextActive}
        onClick={onClick}
        disable={disable}
        as={Link}
        href={href}
        target="_blank"
      >
        {children}
      </ButtonDef>}

    </>
  )
}

export type ButtonDefProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?: string;
  disable?: boolean;
  colorText?: string;
  colorTextActive?: string;
  as?: ReactNode;
  href?: string;
};

export const ButtonDef = styled.button<ButtonDefProps>(
  ({
    colorBack,
    colorHover,
    colorActive,
    disable,
    colorText,
    colorTextActive
  }) => `
  cursor:pointer;
  display:inline-flex;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color:${colorText};
  border-radius: 16px;
  background: ${!disable ? colorBack : "transparent"};
  border: none;

  &:hover{
    background: ${!disable ? colorHover : "transparent"};
  }

  &:active{
    background: ${!disable ? colorActive : "transparent"} ;
    color:${colorTextActive};
  }

  /* @media screen and (max-width:800px){
    flex-directions:column;
  } */
`,
);

export type ButtonIconProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?: string;
  colorText?: string;
  colorTextActive?: string;
  as?: ReactNode;
  href?: string;
};

export const ButtonIcon = styled.button<ButtonIconProps>(
  ({
    colorBack,
    colorHover,
    colorActive,
    colorText,
    colorTextActive
  }) => `
  cursor: pointer;
  display: inline-flex;
  border-radius: 50%;
  padding:0;
  border: none;
  color:${ colorText };
  background: ${ colorBack || "transparent" };

  &:hover{
    background: ${ colorHover || "transparent" };
  }
  
  &:active{
    background: ${ colorActive || "transparent" };
    color:${ colorTextActive };
  } 
`)


export const Link = styled.a`
text-decoration: none;`