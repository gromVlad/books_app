import type { Meta } from "@storybook/react";
import { Container } from "./container";
import { thems } from "../../thems";

const meta = {
  title: "Example/Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;

export const WithContent = () => {
  return (
    <>
      <Container background={thems.colors.black.blackbg}>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias ea et aliquid cupiditate inventore officia cum provident quaerat rerum non delectus culpa ducimus, quod totam quasi accusantium excepturi soluta?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias ea et aliquid cupiditate inventore officia cum provident quaerat rerum non delectus culpa ducimus, quod totam quasi accusantium excepturi soluta?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias ea et aliquid cupiditate inventore officia cum provident quaerat rerum non delectus culpa ducimus, quod totam quasi accusantium excepturi soluta?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestias ea et aliquid cupiditate inventore officia cum provident quaerat rerum non delectus culpa ducimus, quod totam quasi accusantium excepturi soluta?</p>
      </Container>
    </>
  )
}

