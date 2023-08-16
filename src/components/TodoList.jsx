import React, {useState} from "react";
import {connect} from 'react-redux'
import {TodoItem} from './TodoItem.jsx'

const TodoList = ({todoList}) => {

    let todoArray = todoList;

    return (
        <div>
            <div className="todo-header-block">
                <h1 className="todo-header-title">Завдання</h1>
                <div className="todo-header-do-block">
                    <div className="todo-header-not-done">
                        <div className="todo-header-not-done-color"></div>
                        <p>- не зроблено</p>
                    </div>
                    <div className="todo-header-done">
                        <div className="todo-header-done-color"></div>
                        <p>- зроблено</p>
                    </div>
                </div>
            </div>
            <ul>
                {todoArray.map((item, index) => <TodoItem item={item} key={index}/>)}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.list
    }
}

export default connect(mapStateToProps)(TodoList)