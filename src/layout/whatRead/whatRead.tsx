import styled from "styled-components";
import { Container } from "../../components/ui/container/container";
import { WhatToRead } from "../../components/cards/whatToRead/whatToRead";

type WhatReadType = {
  id?:string
  clickHandler?:() => void;
};

export const WhatRead = ({ id, clickHandler }: WhatReadType) => {
  

  return (
    <>
      <Container id={id} >
        <Content>
          <WhatToRead onClick={clickHandler} />
        </Content>
      </Container>
    </>
      
  );
};

const Content = styled.div`
  padding:24px;
  display: flex;
  justify-content: center;
  align-items: center;
`



