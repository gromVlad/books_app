import styled from "styled-components";

export type ButtonProps = {
  colorBack?: string;
  colorHover?: string;
  colorActive?:string;
}

export const Button = styled.button<ButtonProps>(({ colorBack,colorHover,colorActive }) => `
  display: inline-flex;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  background: ${colorBack || 'transparent'};
  border: none;

  &:active{
    background: ${colorActive || 'transparent'} : !important
  }
  &:hover{
    background: ${colorHover || 'transparent'}
  }
`)