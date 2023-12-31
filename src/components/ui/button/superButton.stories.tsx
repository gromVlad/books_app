import type { Meta } from "@storybook/react";
import { SuperButton } from "./superButton";
import { useState } from "react";
import { Typography } from "../typography/typography";

const meta = {
  title: "Example/SuperButton",
  component: SuperButton,
} satisfies Meta<typeof SuperButton>;

export default meta;

export const Default = () => (
  <SuperButton
    colorBack={"#F4CE47"}
    colorHover={"#F29927"}
    colorActive={"#646464"}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
    variant="default"
  >
    <Typography variant="buttonOrTab">Login</Typography>
  </SuperButton>
);

export const Icon = () => (
  <SuperButton
    variant={"shop"}
    colorBack={"#2A2C2E"}
    colorHover={"#646464"}
    colorActive={"#2A2C2E"}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
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
      <SuperButton
        colorBack={"#F4CE47"}
        colorHover={"#F29927"}
        colorActive={"#646464"}
        colorText={"#000000DE"}
        colorTextActive={"#F4CE47"}
        variant="default"
        onClick={countHendler}
      >
        <Typography variant="buttonOrTab">Login</Typography>
      </SuperButton>
    </>
  );
};

export const ActiveIcon = () => {
  const [ifSell, setIfSell] = useState<boolean>(false);

  const countHendler = () => {
    setIfSell(!ifSell);
  };

  return (
    <>
      <h1>{ifSell ? "Sell" : "Not sell"}</h1>
      <SuperButton
        variant={"shop"}
        colorBack={"#2A2C2E"}
        colorHover={"#646464"}
        colorActive={"#2A2C2E"}
        colorText={"#000000DE"}
        colorTextActive={"#F4CE47"}
        onClick={countHendler}
      />
    </>
  );
};

export const Link = () => (
  <SuperButton
    colorBack={"#F4CE47"}
    colorHover={"#F29927"}
    colorActive={"#646464"}
    colorText={"#000000DE"}
    colorTextActive={"#F4CE47"}
    variant="link"
    href={'https://ai.google/discover/palm2/'}
  >
    <Typography variant="buttonOrTab">Visit</Typography>
  </SuperButton>
);