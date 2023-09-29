import styled from "styled-components";
import { ReactNode } from "react";

type ContainerType = {
  background?:string
  children?:ReactNode
  id?:string
};

export const Container = ({ background, children, id }: ContainerType) => {

  return (
    <>
      <Content id={id} background={background} >
        {children}
      </Content>
    </>
  );
};

export type ContentProps = {
  background?: string
};


const Content = styled.section<ContentProps>(
  ({
    background
  }) => `
  background:${background};
  margin:0 auto;
  min-width: 360px;
  width: 100%;
  max-width: 1248px;
	box-sizing: border-box;
`)


