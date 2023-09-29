import styled from "styled-components";
import { Container } from "../../components/ui/container/container";
import { Typography } from "../../components/ui/typography/typography";
import { FindtoRead } from "../../components/cards/findtoRead/findtoRead";
import { BooksOfTheday } from "../../components/cards/booksOfTheday/booksOfTheday";

type AboutType = {
  id?:string
};

export const About = ({ id }: AboutType) => {
  

  return (
    <>
      <Container id={id} >
        <Content>
          <Typography variant="h2">Reading Makes the world huge</Typography>
          <div className={'card'}>
            <FindtoRead />
            <BooksOfTheday />
          </div>
        </Content>
      </Container>
    </>
      
  );
};

const Content = styled.div`
  border: 1px solid black;
  & h2{
    text-align:center;
    text-transform: uppercase;
    margin:0px;
    padding:0px;
    letter-spacing: 4px;
  }

  & .card{
    display:flex;
    justify-content: space-between;
    gap:5px;
    flex-wrap:wrap;
  }

  @media (max-width:1230px){
    .card{
    justify-content: center;
    gap:15px;
  }
  & h2{
    margin:0 auto;
    max-width:850px;
    letter-spacing: 2px;
  }
  }

  @media (max-width:800px){
    .card{
    justify-content: center;
    gap:15px;
  }
  & h2{
    
    letter-spacing: 1px;
  }
  }
`



