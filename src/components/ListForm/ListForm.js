import React, { useState, useEffect, useRef } from 'react';

function ListForm({edit, onSubmit}) {
  const [input, setInput] = useState(edit ? edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            placeholder='Update'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <button onClick={handleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a list'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <button onClick={handleSubmit}>
            Add list
          </button>
        </>
      )}
    </form>
  ) 
}

export default ListForm;
