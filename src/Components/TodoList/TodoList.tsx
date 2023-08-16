import React, { useState } from 'react';
import { Stack, Label, PrimaryButton, TextField  } from "@fluentui/react";
import TodoItem from '../TodoItem/TodoItem';
import { ITodo } from '../../Interfaces/ITodo';

function TodoList(props:any) {

const [todoName, setTodoName] = useState("");

const addTodo = () => {      
    props.addTodo(todoName);
    setTodoName("");
}

const setTodo = (e: any) =>{
    setTodoName(e.target.value);
}

    return (
        
        <Stack gap={10} >
            <Stack horizontal  gap={5}>
                <Stack.Item>
                    <TextField placeholder="Add new item" value={todoName} onChange={setTodo}/>
                </Stack.Item>
                <PrimaryButton onClick={addTodo} >Add</PrimaryButton>
            </Stack>
            { props.todos.length > 0 ? props.todos.map((todo: ITodo) => (
                <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo} />
            )): 
            <Label>Todo list is empty...</Label>}
        </Stack>
    );
}

export default TodoList;