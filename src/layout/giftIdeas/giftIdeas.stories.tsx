import type { Meta } from "@storybook/react";
import { GiftIdeas } from "./giftIdeas";

const meta = {
  title: "Example/GiftIdeas",
  component: GiftIdeas,
} satisfies Meta<typeof GiftIdeas>;

export default meta;

export const Default = () => <GiftIdeas />

