import React, { FC } from "react";
import MyParagraph from "./MyParagraph";

interface Props {
  show: boolean;
}
const DemoOutput: FC<Props> = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
