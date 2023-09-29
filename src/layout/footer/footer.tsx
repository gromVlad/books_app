import styled from "styled-components";
import sprite from "../../assets/sprite.svg";
import { Typography } from "../../components/ui/typography/typography";
import { thems } from "../../components/thems";


type linkType = { name: string; link: string };
type ArrDataLink = Array<linkType>;

type FooterType = {
  email?:string,
  telephone?:string,
  dataLink?: ArrDataLink
};

export const Footer = ({ email, telephone, dataLink }: FooterType) => {
  const tel = `${telephone}`
  const em = `${email}`

  return (
    <>
      <ContainerUp>
        <svg
          width="166"
          height="44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={`${sprite}#${"logo"}`} />
        </svg>
        <div className="icons">
          <a target="_blank" href={dataLink && dataLink[0].link}><svg
            width="24"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${sprite}#${"insta"}`} />
          </svg>
        </a>
          <a target="_blank" href={dataLink && dataLink[1].link}><svg
            width="24"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${sprite}#${"fd"}`} />
          </svg>
        </a>
          <a target="_blank" href={dataLink && dataLink[2].link}><svg
            width="24"
            height="25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${sprite}#${"tw"}`} />
          </svg>
        </a>
        </div>

      </ContainerUp>
      <ContainerDown >
        <div className="text">
          <Typography variant="caption">Terms and conditions</Typography>
          <Typography variant="caption">Privacy policy</Typography>
        </div>
        <div className="text">
          {telephone ? <Typography variant="caption">{tel}</Typography> : ""}
          {email ? <Typography variant="caption">{em}</Typography> : ""}
        </div>
      </ContainerDown>
    </>
  );
};




const ContainerUp = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 88px;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
  background:${thems.colors.black.blackbg};

  & .icons{
    display: flex;
    gap:16px;
  }
`

const ContainerDown = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 40px;
  padding: 12px 24px;
  color:${thems.colors.white.whiteHighEmphasis};
  justify-content: space-between;
  align-items: center;
  background:${thems.colors.black.blackHighEmpathis};

  & .text{
    display: flex;
    gap:16px;
  }
`