import styled from "styled-components";

export type ButtonProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?: string;
  disable?: boolean;
  colorText?: string;
  colorTextHover?: string;
};

export const Button = styled.button<ButtonProps>(
  ({
    colorBack,
    colorHover,
    colorActive,
    disable,
    colorText,
    colorTextHover,
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
    color:${colorTextHover};
  }

  &:active{
    background: ${!disable ? colorActive : "transparent"} ;
  }
`,
);
