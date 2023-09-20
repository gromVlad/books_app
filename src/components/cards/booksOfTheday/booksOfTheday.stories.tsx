import type { Meta } from "@storybook/react";
import { BooksOfTheday } from "./booksOfTheday";
import { useState } from "react";

const meta = {
  title: "Example/BooksOfTheday",
  component: BooksOfTheday,
} satisfies Meta<typeof BooksOfTheday>;

export default meta;

export const Default = () => <BooksOfTheday />

export const WithClickhandler = () => {
  const [count,setCount] = useState<number>(0)

  const clickHandler = () => {
    setCount(count + 1)
  }

  const resetClickHandler = () => {
    setCount(0)
  }

  return (
    <>
      <p>{count}</p>
      <BooksOfTheday onClick={clickHandler} onClickIcons={resetClickHandler} />
    </>
  )
}