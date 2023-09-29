import styled from "styled-components";

type linkType = { name: string; link: string };
type ArrDataLink = Array<linkType>;

type FooterType = {
  email?:string,
  telephone?:string,
  dataLink?: ArrDataLink
};

export const Footer = ({ email, telephone, dataLink }: FooterType) => {


  return (
    <>
      <Container >
        
      </Container>
    </>
  );
};




const Container = styled.div`
  
`