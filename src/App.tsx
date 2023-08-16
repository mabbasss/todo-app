import * as React from "react";
import { useEffect, useState } from "react";
import { ThemeProvider, Stack, Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton, ComboBox, IComboBoxOption, IComboBoxStyles } from "@fluentui/react";
import TodoList from './Components/TodoList/TodoList';
import { ITodo } from "./Interfaces/ITodo";

const options: IComboBoxOption[] = [
  { key: 'all', text: 'All' },
  { key: 'completed', text: 'Completed' },
  { key: 'uncompleted', text: 'Active' },
];
const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

export const App: React.FunctionComponent = () => {

  const [filterValue, setFilterValue] = useState<string | null>(null); // Added filterValue state
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [openDeleteModal, setOpenModal] = useState(true);


  const addTodo = (todoName: string) => {
    if (todoName != "") {
      const newId = todos.length + 1;
      const newTodos = [...todos, { id: newId, name: todoName, complete: false }];
      setTodos(newTodos);
    }
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTasks = todos.filter((todo) => { return todo.id !== id });
    setTodos(newTasks);
  };

  const clearTodos = () => {
    setTodos([]);
    setOpenModal(true);
  };

  const onSelectionChange = (e: any, selection: any) => {
    setFilterValue(selection.key);
  };


  const filteredTodos = todos.filter((todo) => {
    if (filterValue === "completed") {
      return todo.complete;
    } else if (filterValue === "uncompleted") {
      return !todo.complete;
    } else {
      return true; // "all" filter or no filter selected
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeProvider>
      <Stack horizontalAlign="center">
        <h1 className="m-5">Simple TODO App</h1>
        <Stack className="ms-depth-64 p-4 mb-5" gap={20}>
          <ComboBox
            defaultSelectedKey="all" // Assuming 'all' key doesn't exist in todos
            placeholder="All"
            label="Filter by Status"
            allowFreeform={false}
            options={options}
            selectedKey={filterValue}
            onChange={onSelectionChange}
            styles={comboBoxStyles}
          />
          <DefaultButton onClick={() => setOpenModal(!openDeleteModal)}>Clear</DefaultButton>
          <TodoList todos={filteredTodos} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </Stack>
        <Dialog
          hidden={openDeleteModal}
          dialogContentProps={{
            type: DialogType.normal,
            title: "Delete",
            subText:
              "Are you sure you want to delete all items? This cannot be undone."
          }}
        >
          <DialogFooter>
            <PrimaryButton text="Yes" onClick={() => { clearTodos() }} />
            <DefaultButton text="No" onClick={() => { setOpenModal(true) }} />
          </DialogFooter>
        </Dialog>
      </Stack>
    </ThemeProvider>
  );
};