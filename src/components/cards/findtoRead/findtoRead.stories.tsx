import type { Meta } from "@storybook/react";
import { FindtoRead } from "./findtoRead";

const meta = {
  title: "Example/FindtoRead",
  component: FindtoRead,
} satisfies Meta<typeof FindtoRead>;

export default meta;

export const Default = () => <FindtoRead />