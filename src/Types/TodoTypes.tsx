type Todo={
  id: number;
  name: string;
  complete: boolean;
}

type AddTodo=(name:string) => void;

type HandleCheckBoxChange=(id:number) => void;

type DeleteTodo=(id:number) => void;

type ToggleTodo=(id:number) => void;

type ClearTodos=() => void;


