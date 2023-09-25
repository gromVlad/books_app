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
  variant: "default" | "icon" | 'link' | 'LinkWithIcon';
  children?:ReactNode;
  onClick?:() => void;
  href?:string;
  colorIcons?:string;
  colorIconsActive?:string;
};

export const SuperButtonBig = ({ colorBack, colorHover, colorActive, disable, colorText, colorTextActive, variant, children, onClick, href, colorIcons, colorIconsActive }: SuperButtonProps) => {
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
      {variant === "icon" && <ButtonIcon
        colorBack={colorBack}
        colorHover={colorHover}
        colorActive={colorActive}
        colorText={colorText}
        colorTextActive={colorTextActive}
        onClick={onClick}
        colorIcons={colorIcons}
        colorIconsActive={colorIconsActive}
      >
        <svg
          width="90" 
          height="68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"arrowRight"}`} />
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

      {variant === 'LinkWithIcon' && <ButtonIcon
        colorBack={colorBack}
        colorHover={colorHover}
        colorActive={colorActive}
        colorText={colorText}
        colorTextActive={colorTextActive}
        onClick={onClick}
        colorIcons={colorIcons}
        colorIconsActive={colorIconsActive}
        as={Link2}
        href={href}
        target="_blank"
      >
        <svg
          width="90"
          height="68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"arrowRight"}`} />
        </svg>{" "}
      </ButtonIcon>}

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
  display: flex;
  padding: 45px 130px;
  max-width:395px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color:${colorText};
  border-radius: 20px;
  background: ${!disable ? colorBack : "transparent"};
  border: none;

  &:hover{
    background: ${!disable ? colorHover : "transparent"};
  }

  &:active{
    background: ${!disable ? colorActive : "transparent"} ;
    color:${colorTextActive};
  }

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
  colorIcons?:string;
  colorIconsActive?:string;
};

export const ButtonIcon = styled.button<ButtonIconProps>(
  ({
    colorBack,
    colorHover,
    colorActive,
    colorText,
    colorTextActive,
    colorIcons,
    colorIconsActive
  }) => `
  cursor: pointer;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 176px;
  border: none;
  color:${ colorText };
  background: ${ colorBack || "transparent" };
   & svg {
     fill:${colorIcons}
    }

  &:hover{
    background: ${ colorHover || "transparent" };
  }
  
  &:active{
    background: ${ colorActive || "transparent" };
    color:${ colorTextActive };
    & svg {
      transform: rotate(45deg);
      fill:${colorIconsActive};
    }
  } 
`)


export const Link = styled.a`
text-decoration: none;
max-width:130px;`

export const Link2 = styled.a`
text-decoration: none;
`