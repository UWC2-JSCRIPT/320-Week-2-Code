import React from 'react';
import './App.css';
// import Picture from './Picture';
import TodoListApp from './TodoListApp/TodoListApp';

function App() {
  return (
    <div>
      <TodoListApp />
      <TodoListApp />
      <TodoListApp />
      {/* this is a comment */}
      {/* <Picture
        src="https://media.giphy.com/media/tIoeLjCZ1Ib3a/giphy.gif"
        alt="Picture of Dave Grohl being sassy"
      /> */}
    </div>
  );
}

export default App;
