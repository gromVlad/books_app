import styled from "styled-components";
import { Container } from "../../components/ui/container/container";
import { DiscountsCard } from "../../components/cards/discountsCard/discountsCard";
import { BestBooksCard } from "../../components/cards/bestBooksCard/bestBooksCard";

type GiftIdeasType = {
  id?:string
  clickHandlerDiscount?:() => void;
  clickHandlerBooksCard?:() => void;
};

export const GiftIdeas = ({ id, clickHandlerDiscount, clickHandlerBooksCard }: GiftIdeasType) => {
  

  return (
    <>
      <Container id={id} >
        <Content>
          <DiscountsCard onclick={clickHandlerDiscount}/>
          <BestBooksCard onclick={clickHandlerBooksCard} />
        </Content>
      </Container>
    </>
      
  );
};

const Content = styled.div`
  padding:24px;
  display: flex;
  gap:7px;
  flex-wrap:wrap;
  
  @media (max-width:1279px){
    justify-content: center;
    gap:15px;
  }
`



