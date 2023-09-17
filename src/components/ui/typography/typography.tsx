import styled from "styled-components";
import { thems } from "../../thems";

export type TypographyType = {
  variant: 'h1' | 'h2' | 'h3' | "h4" | "h5" | "h5R" | 'h6' | 'subtitle1' | "buttonOrTab" | 'subtitle2' | 'body1' | 'body1R' | 'body2' | 'body2R' | 'caption' | 'overline'
  children:string;
}

export const Typography = ({ variant, children }: TypographyType) => {
  return (
    <>
      {variant === 'h1' && <HeadlineH1 >{children}</HeadlineH1>}
      {variant === 'h2' && <HeadlineH2 >{children}</HeadlineH2>}
      {variant === 'h3' && <HeadlineH3 >{children}</HeadlineH3>}
      {variant === 'h4' && <HeadlineH4 >{children}</HeadlineH4>}
      {variant === 'h5' && <HeadlineH5 >{children}</HeadlineH5>}
      {variant === 'h5R' && <HeadlineH5Regular >{children}</HeadlineH5Regular>}
      {variant === 'h6' && <HeadlineH6 >{children}</HeadlineH6>}
      {variant === 'subtitle1' && <Subtitle1 >{children}</Subtitle1>}
      {variant === 'buttonOrTab' && <ButtonOrTab >{children}</ButtonOrTab>}
      {variant === 'subtitle2' && <Subtitle2 >{children}</Subtitle2>}
      {variant === 'body1' && <Body1 >{children}</Body1>}
      {variant === 'body1R' && <Body1Regular >{children}</Body1Regular>}
      {variant === 'body2' && <Body2 >{children}</Body2>}
      {variant === 'body2R' && <Body2Regular >{children}</Body2Regular>}
      {variant === 'caption' && <Caption >{children}</Caption>}
      {variant === 'overline' && <Overline >{children}</Overline>}
    </>
  )
}

const HeadlineH1 = styled.h1`
  font-family: Clash Grotesk Variable;
font-size: 96px;
font-style: normal;
font-weight: 600;
line-height: 120px;
letter-spacing: -0.96px;
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH2 = styled.h2`
  font-family: Clash Grotesk Variable;
font-size: 60px;
font-style: normal;
font-weight: 600;
line-height: 72px;
letter-spacing: -0.3px;
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH3 = styled.h3`
  font-family: Clash Grotesk Variable;
font-size: 48px;
font-style: normal;
font-weight: 400;
line-height: 56px; 
text-transform: uppercase;
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH4 = styled.h4`
  font-family: Clash Grotesk Variable;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: 0.08px;
text-transform: uppercase;
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH5 = styled.h5`
  font-family: Clash Grotesk Variable;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 32px; 
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH5Regular = styled.h5`
 font-family: Clash Grotesk Variable;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 28px; 
color:${thems.colors.white.whiteHighEmphasis}
`

const HeadlineH6 = styled.h6`
 font-family: Clash Grotesk Variable;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: 0.03px
color:${thems.colors.white.whiteHighEmphasis}
`

const Subtitle1 = styled.span`
 font-family: Clash Grotesk Variable;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: 0.024px;
color:${thems.colors.white.whiteHighEmphasis}
`

const ButtonOrTab = styled.span`
 font-family: Clash Grotesk Variable;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; 
letter-spacing: 0.024px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Subtitle2 = styled.span`
 font-family: Clash Grotesk Variable;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
letter-spacing: 0.021px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Body1 = styled.p`
 font-family: Clash Grotesk Variable;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
letter-spacing: 0.024px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Body1Regular = styled.p`
font-family: Clash Grotesk Variable;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 24px; 
letter-spacing: 0.024px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Body2 = styled.p`
 font-family: Clash Grotesk Variable;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
letter-spacing: 0.021px;
color:${thems.colors.white.whiteHighEmphasis}
`
const Body2Regular = styled.p`
font-family: Clash Grotesk Variable;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.021px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Caption = styled.span`
font-family: Clash Grotesk Variable;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
letter-spacing: 0.018px;
color:${thems.colors.white.whiteHighEmphasis}
`

const Overline = styled.span`
font-family: Clash Grotesk Variable;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 16px; 
letter-spacing: 0.015px;
color:${thems.colors.white.whiteHighEmphasis}
`










