import React, {useState} from "react";
import classNames from "classnames";

export const TodoItem = ({item}) => {
    const [checked, setChecked] = useState(false);

    return (
        <li className={classNames('todo-list', {
            'todo-done': checked
        })} onClick={() => setChecked(!checked)}>
        {item}
        </li>
    )
}