import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List() {
  const items = useSelector((state) => state.todo);

  return (
    <ul className="mt-2 p-0">
      {items
        .map((item) => {
          return <ListItem key={item.id} item={item} />;
        })
        .reverse()}
    </ul>
  );
}

export default List;
