import React, { useState } from 'react';
import { Stack, Label, IconButton, Dialog, DialogFooter, DefaultButton, PrimaryButton, DialogType,Checkbox } from '@fluentui/react';

function TodoItem(props: any) {
    const [openDeleteModal, setOpenModal] = useState(true);

    const deleteTodo = (id: number) => {
        props.deleteTodo(id);
        setOpenModal(true);
    }

    const handleCheckBoxChange = (id:number)=>{
      props.toggleTodo(id);
    }

    return (
      
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
            <Checkbox checked={props.todo.complete} onChange={()=>handleCheckBoxChange(props.todo.id)}/>
                <Label style={{ textDecoration: props.todo.complete ? 'line-through' : undefined }}>{props.todo.name}</Label>
                <IconButton iconProps={{ iconName: 'trash' }} onClick={() => { setOpenModal(!openDeleteModal) }} />
            </Stack>
            <Dialog
                hidden={openDeleteModal}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: "Delete",
                    subText:
                        "Are you sure you want to delete this item? This cannot be undone."
                }}
            >
                <DialogFooter>
                    <PrimaryButton text="Yes" onClick={() => { deleteTodo(props.todo.id) }} />
                    <DefaultButton text="No" onClick={() => { setOpenModal(true) }} />
                </DialogFooter>
            </Dialog>
        </Stack>
    );
}

export default TodoItem