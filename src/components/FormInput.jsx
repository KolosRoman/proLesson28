import React, {useState} from "react";
import {connect} from 'react-redux'

const FormInput = ({todolist, addNewTodo}) => {
    const [addTodo, setAddTodo] = useState('');

    const onAddTodo = (e) => {
        e.preventDefault();
        if(addTodo !== '') {
            addNewTodo(addTodo);
            setAddTodo('');
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={onAddTodo} className='form-block'>
                <h2 className="form-block-title">Додати завдання</h2>
                <textarea name="" value={addTodo}  onChange={(e) => setAddTodo(e.target.value)} className='form-item'></textarea>
                <button className='form-button'>Додати</button>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todolist: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodo: (newTodo) => {
            dispatch({
                type: 'ADD_TODO',
                addTodo: newTodo
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput)