import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ lists, removeList, listUp, listDown }) => {
  let lastItem = lists.length - 1
  return (
    <ul>
      {lists.map((list, index) => (
        <ListItem list={list} removeList={removeList} key={list.id} index={index} listUp={listUp} listDown={listDown} lastItem={lastItem}/>
      ))}
    </ul>
  );
};

export default List;
