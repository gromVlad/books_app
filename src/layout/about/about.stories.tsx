import type { Meta } from "@storybook/react";
import { About } from "./about";

const meta = {
  title: "Example/About",
  component: About,
} satisfies Meta<typeof About>;

export default meta;

export const Default = () => <About />

