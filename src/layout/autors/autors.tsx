import styled from "styled-components";
import { Container } from "../../components/ui/container/container";
import { Typography } from "../../components/ui/typography/typography";
import { thems } from "../../components/thems";
import { SuperButtonBig } from "../../components/ui/buttonBig/superButtonBig";
import { Autor } from "../../components/cards/autor/autor";

type AutorsType = {
  id?:string
  autorsData?:{name:string,books:string,src:string}[]
  handlerBtnCard?:() => void,
  handlerIcons?:() => void,
  handlerSeaAll?: () => void,
};

export const Autors = ({ id, autorsData, handlerSeaAll }: AutorsType) => {
  

  return (
    <div style={{ background: `${thems.colors.black.blackbg}` }}>
      <Container id={id} >
        <Content>
          <Typography variant="h4">POPULAR AUTHORS</Typography>
          <Cards>
            {autorsData ? 
              autorsData.map((el,index) => {
              return <Autor key={index} src={el.src} name={el.name} books={el.books} />
            }) 
            
              : <div className={'notText'}><Typography variant="h4">Not books</Typography></div>}
            {autorsData && 
            <div className={'btn'}>
            <SuperButtonBig
              colorBack={"#F4CE47"}
              colorHover={"#F29927"}
              colorActive={"#646464"}
              colorText={"black"}
              colorTextActive={"#F4CE47"}
              variant="default"
              onClick={handlerSeaAll}
              width={'294'}
              height={'146'}
            >
              <Typography variant="h4">See all</Typography>
            </SuperButtonBig>
              </div>}
          </Cards>
        </Content>
      </Container>
    </div>
      
  );
};

const Content = styled.div`
  padding: 20px 24px 44px 24px;
  background:${thems.colors.black.blackbg};
  & h4{
    padding:24px;
    text-align:center;
    color:${thems.colors.white.whiteHighEmphasis};
  }

   
`

const Cards = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
  gap:7px;
  
  & .btn{
     width:294px;
  }

`



