import { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { Container } from 'react-bootstrap'

function App() {

  const [todo, setTodo] = useState([])

  return (
    <Container>
      < Header />
      < AddTodo todo={todo} setTodo={setTodo} />
      < TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
