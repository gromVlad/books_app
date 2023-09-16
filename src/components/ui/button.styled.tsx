import styled from "styled-components";

export type ButtonProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?: string;
  disable?: boolean;
  colorText?: string;
  colorTextHover?: string;
  variant: "default" | "shop";
};

export const Button = styled.button<ButtonProps>(
  ({
    colorBack,
    colorHover,
    colorActive,
    disable,
    colorText,
    colorTextHover,
    variant,
  }) => `
  ${variant === "default" &&
    `
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
    color:${colorTextHover};
  }

  &:active{
    background: ${!disable ? colorActive : "transparent"} ;
  }
  `
    }

  ${variant === "shop" &&
    `
    cursor:pointer;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 56px;
    height: 56px;
    border-radius:50%;
    border: none;
    color:${colorText};
    background: ${colorBack || "transparent"};

    &:hover{
  background: ${ colorHover || "transparent" };
  color:${ colorTextHover };
}
  
    &:active{
  background: ${ colorActive || "transparent" };
}
`
  }

  /* @media screen and (max-width:800px){
    flex-directions:column;
  } */
`,
);
