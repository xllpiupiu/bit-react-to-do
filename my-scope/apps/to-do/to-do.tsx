
// COMPONENT: my-org.tasks-scope/apps/to-to
// FILE: to-do.tsx

import React, { useState, ReactNode } from 'react';
// import { InputText } from '@teambit/design.inputs.input-text';

export type ToDoProps = {
  initialTodo?: string;
  children?: ReactNode;
};

const inputStyle = {
  width: 300,
  padding: 10,
};

export function ToDo({ initialTodo = 'first to-do!', children }: ToDoProps) {
  const [todos, setTodos] = useState([initialTodo]);
  const [inputVal, setInputVal] = useState('');
  return (
    <>
      <input
        style={inputStyle}
        value={inputVal}
        placeholder="Write a to-do and hit the 'return' key"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        onKeyDown={(e) => {
          if (!(e.code === 'Enter') || inputVal === '') return;
          setTodos((prev) => [inputVal, ...prev]);
          setInputVal('');
        }}
      />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      {children}
    </>
  );
}