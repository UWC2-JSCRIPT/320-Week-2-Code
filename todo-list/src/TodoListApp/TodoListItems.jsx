import React from 'react';
import PropTypes from 'prop-types';

function TodoListItems({ todoList }) {
    const items = todoList.map((todo, idx) => <li key={idx}>{todo}</li>);
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

TodoListItems.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TodoListItems;
