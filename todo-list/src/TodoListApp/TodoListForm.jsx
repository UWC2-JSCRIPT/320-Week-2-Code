import React from 'react';
import PropTypes from 'prop-types';

function TodoListForm({ itemToAdd, setItemText, addItem }) {
    return (
        <div>
            <form onSubmit={addItem}>
                <label htmlFor="todo-input">Todo: </label>
                <input
                    id="todo-input"
                    value={itemToAdd}
                    onChange={event => setItemText(event.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

TodoListForm.propTypes = {
    itemToAdd: PropTypes.string.isRequired,
    setItemText: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
}

export default TodoListForm;