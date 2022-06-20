import { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { Container } from 'react-bootstrap'

function App() {

  const [todo, setTodo] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const setTodosWithSave = (newTodos) => {
    setTodo(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
}
  return (
    <Container>
      < Header />
      < AddTodo todo={todo} setTodo={setTodo} saveInLS = {setTodosWithSave} />
      < TodoList todo={todo} setTodo={setTodo} saveInLS = {setTodosWithSave}/>
    </Container>
  );
}

export default App;
