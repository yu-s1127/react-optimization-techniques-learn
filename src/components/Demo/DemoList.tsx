import React, { FC, useMemo } from "react";

import classes from "./DemoList.module.css";

interface Props {
  title: string;
  items: number[];
}

const DemoList: FC<Props> = ({ items, ...props }) => {
  const sortedList = useMemo(() => {
    console.log("items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
