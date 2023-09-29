import styled from "styled-components";
import { thems } from "../../thems";
import { Typography } from "../../ui/typography/typography";
import { SuperButton } from "../../ui/button/superButton";

type BooksCardType = {
  name: string;
  book: string;
  src?: string;
  onclickBtn?: () => void;
  onClickIcons?: () => void;
};

export const BooksCard = ({
  name,
  book,
  src,
  onclickBtn,
  onClickIcons,
}: BooksCardType) => {
  const bookStr = `${book} books`;

  return (
    <>
      <Container >
        {src ? (
          <Image src={src} alt={`name autor ${name}`} />
        ) : (
          <NotImg>not img</NotImg>
        )}
        <div className={"content"}>
          <Typography variant="subtitle1">{bookStr}</Typography>
          <Typography variant="h5">{name}</Typography>
            <div className={"containerBtn"}>
              <SuperButton
                colorBack={thems.colors.black.blackbg}
                colorHover={thems.colors.black.gray}
                colorActive={thems.colors.black.blackbg}
                colorText={thems.colors.yellow.yellow500}
                colorTextActive={thems.colors.yellow.yellow500}
                variant="default"
              onClick={onclickBtn}
              >
                BUY NOW
              </SuperButton>
              <SuperButton
                colorBack={thems.colors.black.blackbg}
                colorHover={thems.colors.black.gray}
                colorActive={thems.colors.black.blackbg}
                colorText={thems.colors.yellow.yellow500}
                colorTextActive={thems.colors.yellow.yellow500}
                variant="shop"
                onClick={onClickIcons}
              />
            </div>
          </div>
      </Container>
    </>
  );
};

const NotImg = styled.div`
  padding: 100px 15px;
`;

const Container = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 20px;
  padding: 16px;
  width: 363px;
  height: 184px;
  background: ${thems.colors.white.whiteHighEmphasis};
  cursor: pointer;
  transition: ${thems.animation.card};

  & .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0px 16px 0px;
    & .containerBtn{
      display: flex;
      gap: 8px;
    }
  }

  & .content h5 {
    margin: 0px;
  }

  & span {
    max-width: 600px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &:hover {
    background: ${thems.colors.yellow.yellow200};
  }
`;

const Image = styled.img`
  width: 120px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  margin-right: 8px;
`;
