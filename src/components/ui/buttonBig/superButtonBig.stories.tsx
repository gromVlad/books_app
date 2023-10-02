import type { Meta } from "@storybook/react";
import { SuperButtonBig } from "./superButtonBig";
import { useState } from "react";
import { Typography } from "../typography/typography";
import { thems } from "../../thems";

const meta = {
  title: "Example/SuperButtonBig",
  component: SuperButtonBig,
} satisfies Meta<typeof SuperButtonBig>;

export default meta;

export const Default = () => (
  <SuperButtonBig
    colorBack={"#F4CE47"}
    colorHover={"#F29927"}
    colorActive={"#646464"}
    colorText={"black"}
    colorTextActive={"#F4CE47"}
    variant="default"
    width={'395'}
    height={'218'}
  >
    <Typography variant="h4">See all</Typography>
  </SuperButtonBig>
);

export const Icon = () => (
  <SuperButtonBig
    variant={"icon"}
    colorBack={"#2A2C2E"}
    colorHover={"#646464"}
    colorActive={thems.colors.black.gray2}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
    colorIcons={thems.colors.yellow.yellow700} 
    colorIconsActive={thems.colors.black.blackbg}
  />
);

export const ActiveDefault = () => {
  const [count, setCount] = useState<number>(0);

  const countHendler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <SuperButtonBig
        colorBack={"#F4CE47"}
        colorHover={"#F29927"}
        colorActive={"#646464"}
        colorText={"#000000DE"}
        colorTextActive={"#F4CE47"}
        variant="default"
        onClick={countHendler}
        width={'395'}
        height={'218'}
      >
        <Typography variant="h4">See all</Typography>
      </SuperButtonBig>
    </>
  );
};

export const Link = () => (
  <SuperButtonBig
    colorBack={"#F4CE47"}
    colorHover={"#F29927"}
    colorActive={"#646464"}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
    variant="link"
    href={'https://ai.google/discover/palm2/'}
    width={'395'}
    height={'218'}
  >
    <Typography variant="h4">Visit</Typography>
  </SuperButtonBig>
);

export const Link2 = () => (
  <SuperButtonBig
    variant={"LinkWithIcon"}
    href={'https://ai.google/discover/palm2/'}
    colorBack={"#2A2C2E"}
    colorHover={"#646464"}
    colorActive={thems.colors.black.gray2}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
    colorIcons={thems.colors.yellow.yellow700}
    colorIconsActive={thems.colors.black.blackbg}
  />
);