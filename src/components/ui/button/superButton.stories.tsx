import type { Meta } from "@storybook/react";
import { SuperButton } from "./superButton";
import { useState } from "react";

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
    login
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
  let [count, setCount] = useState<number>(0);

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
        login
      </SuperButton>
    </>
  );
};

export const ActiveIcon = () => {
  let [ifSell, setIfSell] = useState<boolean>(false);

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
