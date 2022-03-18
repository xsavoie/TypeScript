"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./TodoList.css");
const TodoList = (props) => {
    return (<ul>
      {props.items.map((todo) => (<li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>))}
    </ul>);
};
exports.default = TodoList;
