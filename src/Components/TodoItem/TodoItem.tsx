import React, { useState } from 'react';
import { Stack, Label, IconButton,Checkbox, DialogType, IDialogContentProps } from '@fluentui/react';
import CustomModal from '../CustomModal/CustomModal';

interface TodoItemProps{
    todo:Todo
    deleteTodo:DeleteTodo
    toggleTodo:ToggleTodo
}

const dialogContentProps:IDialogContentProps={type:DialogType.normal,title:"Delete",subText:"Are you sure you want to delete this item? This cannot be undone."}

function TodoItem({deleteTodo,todo,toggleTodo}: TodoItemProps) {

const [openDeleteModal, setOpenModal] = useState(true);


    return (
      
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
            <Checkbox checked={todo.complete} onChange={()=> toggleTodo(todo.id)}/>
                <Label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>{todo.name}</Label>
                <IconButton iconProps={{ iconName: 'trash' }} onClick={() => { setOpenModal(!openDeleteModal) }} />
            </Stack>
            <CustomModal openDeleteModal={openDeleteModal} setOpenModal={setOpenModal} todoId={todo.id} deleteTodoFuns={deleteTodo} dialogContentProps={dialogContentProps} ></CustomModal>
        </Stack>
    );
}

export default TodoItem