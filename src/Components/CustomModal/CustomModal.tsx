import { DefaultButton, Dialog, DialogFooter, IDialogContentProps, PrimaryButton } from '@fluentui/react';
import React from 'react';

interface CustomModalProp{
  todoId?:number
  deleteTodoFuns:DeleteTodo|ClearTodos
  dialogContentProps:IDialogContentProps
  openDeleteModal:boolean
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>
}

function CustomModal({deleteTodoFuns,dialogContentProps,openDeleteModal,setOpenModal,todoId}:CustomModalProp){


  return(
    <Dialog
                hidden={openDeleteModal}
                dialogContentProps={dialogContentProps}
            >
                <DialogFooter>
                    <PrimaryButton text="Yes" onClick={() => { deleteTodoFuns(todoId!);setOpenModal(true); }} />
                    <DefaultButton text="No" onClick={() => {setOpenModal(true) }} />
                </DialogFooter>
            </Dialog>
  );
}

export default CustomModal;