import type { Meta } from "@storybook/react";
import { Footer } from "./footer";

const meta = {
  title: "Example/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

export const Default = () => <Footer />

export const WithData = () => {
  const arrData = [
    { name: 'instagram', link:'https://www.instagram.com/'},
    { name: 'facebook', link:'https://ru-ru.facebook.com/'},
    { name: 'twitter', link:'https://twitter.com/?lang=ru'},
  ]
  


  return (
   <>
      <Footer dataLink={arrData} email={'support@bbookshelf.com'} telephone={'+44 1332 412251'} />
   </>
  )
}