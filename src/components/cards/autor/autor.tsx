import styled from "styled-components";
import { thems } from "../../thems";
import { Typography } from "../../ui/typography/typography";

type AutorType = {
  name: string;
  books: string;
  src?:string;
};

export const Autor = ({ name, books, src }: AutorType) => {

  const booksStr = `${books} books`

  return (
    <>
      <Container>
        {src ? <Image src={src} alt={`name autor ${name}`} /> : <NotImg>not img</NotImg>}
        <div className={'content'}>
          <Typography variant="subtitle1">
            {booksStr}
          </Typography>
          <Typography variant="h5">
            {name}
          </Typography>
        </div>
      </Container>
    </>
  );
};

const NotImg = styled.div`
  padding:100px 15px;
`


const Container = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 20px;
  width: 294px;
  height: 146px;
  background:${thems.colors.white.whiteHighEmphasis};

  & .content {
    width: 110px;
    padding: 16px 0px 16px 0px;
  }

  & .content h5{
    margin:0px;
  }
`

const Image = styled.img`
  width: 93px;
  object-fit: cover;
  object-position: center;
  margin-right:8px;
`
