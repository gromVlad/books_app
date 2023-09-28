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
    <Header navItems={navItems} isHidden={false} />
  )
}