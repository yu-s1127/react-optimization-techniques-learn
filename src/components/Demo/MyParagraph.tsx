import React, { FC } from "react";

const MyParagraph: FC = (props) => {
  console.log("MyParagraph RUNNING");
  return <p>{props.children}</p>;
};

export default MyParagraph;
