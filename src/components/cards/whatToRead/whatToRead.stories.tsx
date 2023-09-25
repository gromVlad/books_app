import type { Meta } from "@storybook/react";
import { useState } from "react";
import { WhatToRead } from "./whatToRead";

const meta = {
  title: "Example/WhatToRead",
  component: WhatToRead,
} satisfies Meta<typeof WhatToRead>;

export default meta;

export const Default = () => <WhatToRead />

export const WithClickhandler = () => {
  const [count,setCount] = useState<number>(0)

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      <WhatToRead onClick={clickHandler}/>
    </>
  )
}