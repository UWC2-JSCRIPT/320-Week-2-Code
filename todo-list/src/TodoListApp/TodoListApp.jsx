import React, {useState} from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';

function TodoListApp() {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    const addItem = (event) => {
        event.preventDefault();

        if (itemToAdd === '') {
            window.alert('You must type in some text');
            return;
        }

        setTodos([...todos, itemToAdd]);
        setItemText('');
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoListForm
                itemToAdd={itemToAdd}
                setItemText={setItemText}
                addItem={addItem}
            />
            <TodoListItems todoList={todos} />
        </div>
    );
}

export default TodoListApp;