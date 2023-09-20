import type { Meta } from "@storybook/react";
import { FindtoRead } from "./findtoRead";
import { useState } from "react";

const meta = {
  title: "Example/FindtoRead",
  component: FindtoRead,
} satisfies Meta<typeof FindtoRead>;

export default meta;

export const Default = () => <FindtoRead />

export const WithClickhandler = () => {
  const [count,setCount] = useState<number>(0)

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      <FindtoRead onClick={clickHandler}/>
    </>
  )
}