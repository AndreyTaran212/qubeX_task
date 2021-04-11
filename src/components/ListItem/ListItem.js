import React, { useState, useCallback } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import {
  AiOutlinePlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp
} from "react-icons/ai";
import Lists from "../Lists/Lists";

const ListItem = ({ list, removeList, listUp, listDown, index, lastItem }) => {
  const [hasInnerList, setHasInnerList] = useState(false);
  const handleInner = useCallback(() => setHasInnerList(!hasInnerList), [
    hasInnerList
  ]);

  return (
    <li key={list.id}>
      {list.text}
      <div>
        <RiCloseCircleLine onClick={() => removeList(list.id)} />
        {hasInnerList ? null : <AiOutlinePlusCircle onClick={handleInner} />}
        {index === 0 ? null : (
          <AiOutlineArrowUp onClick={() => listUp(index)} />
        )}
        {lastItem === index ? null : (
          <AiOutlineArrowDown onClick={() => listDown(index)} />
        )}
      </div>
      <Lists hasInnerList={hasInnerList} />
    </li>
  );
};

export default ListItem;
