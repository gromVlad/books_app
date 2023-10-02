import type { Meta } from "@storybook/react";
import { WhatRead } from "./whatRead";

const meta = {
  title: "Example/WhatRead",
  component: WhatRead,
} satisfies Meta<typeof WhatRead>;

export default meta;

export const Default = () => <WhatRead />

