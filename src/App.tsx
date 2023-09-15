import { Button } from "../src/components/ui/button.styled";

export function App() {
  return (
    <>
      <Button
        colorBack={"#F4CE47"}
        colorHover={"#F29927"}
        colorActive={"#646464"}
        colorText={"#000000DE"}
        colorTextHover={"#F4CE47"}
      >
        LOGIN
      </Button>
      <Button disable={true}>LOGIN</Button>
    </>
  );
}

//https://www.figma.com/file/iqDCVOyoQrBW7ejtPo3jCK/Ecommerce-Big-bookshelf-(Community)?type=design&node-id=659-2505&mode=design&t=wBrF1ooOWBP1RMWB-0
