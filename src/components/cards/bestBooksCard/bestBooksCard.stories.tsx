import type { Meta } from "@storybook/react";
import { useState } from "react";
import { BestBooksCard } from "./bestBooksCard";

const meta = {
  title: "Example/BestBooksCard",
  component: BestBooksCard,
} satisfies Meta<typeof BestBooksCard>;

export default meta;

export const Default = () => <BestBooksCard />

export const WithOnClick = () => {
  const [click,setClick] = useState<number>(1)

  return (
    <>
      <p>{click}</p>
      <BestBooksCard onclick={() => setClick(click+1)}/>
    </>
  )
}