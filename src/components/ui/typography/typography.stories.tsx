import type { Meta } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
  title: "Example/Typography ",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

export const H1 = () => <Typography variant="h1">Hello</Typography>
export const H2 = () => <Typography variant="h2">Hello</Typography>
export const H3 = () => <Typography variant="h3">Hello</Typography>
export const H4 = () => <Typography variant="h4">Hello</Typography>
export const H5 = () => <Typography variant="h5">Hello</Typography>
export const H5Regular = () => <Typography variant="h5R">Hello</Typography>
export const H6 = () => <Typography variant="h6">Hello</Typography>
export const Subtitle1 = () => <Typography variant="subtitle1">Hello</Typography>
export const ButtonOrTab = () => <Typography variant="buttonOrTab">Hello</Typography>
export const Subtitle2 = () => <Typography variant="subtitle2">Hello</Typography>
export const Body1 = () => <Typography variant="body1">Hello</Typography>
export const Body2 = () => <Typography variant="body2">Hello</Typography>
export const Body2R = () => <Typography variant="body2R">Hello</Typography>
export const Caption = () => <Typography variant="caption">Hello</Typography>
export const Overline = () => <Typography variant="overline">Hello</Typography>