import { useState } from "react";
import { Button } from "../src/components/ui/button.styled";

export function App() {
  const [count, useCount] = useState<number>(1);

  return (
    <>
      <Button
        colorBack={"#F4CE47"}
        colorHover={"#F29927"}
        colorActive={"#64646"}
        onClick={() => useCount(count + 1)}
      >
        LOGIN
      </Button>
      {count}
    </>
  );
}

//https://www.figma.com/file/iqDCVOyoQrBW7ejtPo3jCK/Ecommerce-Big-bookshelf-(Community)?type=design&node-id=659-2505&mode=design&t=wBrF1ooOWBP1RMWB-0
