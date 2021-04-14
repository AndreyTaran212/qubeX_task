import React, { useState } from "react";
import ListForm from "../ListForm/ListForm";
import List from "../List/List";
import produce from 'immer'; 

function Lists({hasInnerList}) {
  const [lists, setLists] = useState([]);

  const addList = (list) => {
    if (!list.text || /^\s*$/.test(list.text)) {
      return;
    }

    const newLists = [...lists, list ];

    setLists(newLists);
  };

  const updateList = (listId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setLists((prev) =>
      prev.map((item) => (item.id === listId ? newValue : item))
    );
  };

  const removeList = (id) => {
    const removedArr = [...lists].filter((list) => list.id !== id);

    setLists(removedArr);
  };
  
  const listDown = (index) => {
    const newListsDown = produce(lists, draftList =>{
      draftList[index] = draftList.splice(index + 1, 1, draftList[index])[0]
    })
    setLists(newListsDown)
  };

  const listUp = (index) => {
    const newListsUp = produce(lists, draftList =>{
      draftList[index] = draftList.splice(index - 1, 1, draftList[index])[0]
    })
    setLists(newListsUp)
  };

if (hasInnerList) {
    return (
      <>
        <ListForm onSubmit={addList} />
        <List
          lists={lists}
          removeList={removeList}
          updateList={updateList}
          listUp={listUp}
          listDown={listDown}
        />
      </>
    );
  }
  return null;
}

export default Lists;

Lists.defaultProps = { hasInnerList: true };
