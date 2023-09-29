import type { Meta } from "@storybook/react";
import { Header } from "./header";

const meta = {
  title: "Example/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

export const Default = () => <Header />

export const WithAutors = () => {

  const navItems = [
    { name: "Books", link: "books" },
    { name: "Authors", link: "authors" },
    { name: "What to Read?", link: "read" },
    { name: "About Us", link: "about" },
  ];
    


  return (
    <>
    <Header navItems={navItems} isHidden={false}/>
      <section id={"books"} style={{ width: "90%", height: "500px", background: 'green', margin: '50px auto' }}>books</section>
      <section id={"authors"} style={{ width: "90%", height: "500px", background: 'blue', margin:'50px auto' }}>authors</section>
      <section id={"read"} style={{ width: "90%", height: "500px", background: 'yellow', margin: '50px auto' }}>read</section>
      <section id={"about"} style={{ width: "90%", height: "500px", background: 'orange', margin: '50px auto', marginBottom:"50px" }}>about</section>
    </>
  )
}