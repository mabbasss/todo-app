import React, {FormEvent, useState } from 'react';
import { Stack, Label, PrimaryButton, TextField  } from "@fluentui/react";
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps{
    todos:Todo[]
    addTodo:AddTodo
    toggleTodo:ToggleTodo
    deleteTodo:DeleteTodo
}

function TodoList(props:TodoListProps) {

const [todoName, setTodoName] = useState("");


    return (
        
        <Stack tokens={{childrenGap:10}} >
            <Stack horizontal  tokens={{childrenGap:5}}>
                <Stack.Item>
                    <TextField placeholder="Add new item" value={todoName} onChange={(e: FormEvent<HTMLInputElement|HTMLTextAreaElement>) =>{setTodoName(e.currentTarget.value);}}/>
                </Stack.Item>
                <PrimaryButton onClick={()=>{props.addTodo(todoName);setTodoName("");}} >Add</PrimaryButton>
            </Stack>
            { props.todos.length > 0 ? props.todos.map((todo: Todo,index) => (
                <TodoItem todo={todo} key={index} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo} />
            )): 
            <Label>Todo list is empty...</Label>}
        </Stack>
    );
}

export default TodoList;