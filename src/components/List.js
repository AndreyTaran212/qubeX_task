import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ lists, removeList }) => {
  return (
    <ul>
      {lists.map((list, index) => (
        <ListItem list={list} removeList={removeList} key={index} />
      ))}
    </ul>
  );
};

export default List;
