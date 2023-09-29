import type { Meta } from "@storybook/react";
import { DiscountsCard } from "./discountsCard";
import { useState } from "react";

const meta = {
  title: "Example/DiscountsCard",
  component: DiscountsCard,
} satisfies Meta<typeof DiscountsCard>;

export default meta;

export const Default = () => <DiscountsCard />

export const WithOnClick = () => {
  const [click,setClick] = useState<number>(1)

  return (
    <>
      <p>{click}</p>
      <DiscountsCard onclick={() => setClick(click+1)}/>
    </>
  )
}