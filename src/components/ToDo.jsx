import {
  Container,
  DateDay,
  DateTime,
  NewTodo,
  Check,
  InputDiv,
  MainDiv,
  Button,
  TodosDiv,
} from "../styled/Container.Styled";
import NewToDo from "./NewToDo";
import { useState, useEffect } from "react";

export default function ToDo() {
  const date = new Date();

  const optionsOfDay = { weekday: "short", day: "numeric" };
  const currentDate = date.toLocaleDateString("en-US", optionsOfDay);

  const optionsOfTime = { hour: "numeric", minute: "numeric", hour12: true };
  const currentTime = date.toLocaleTimeString("en-US", optionsOfTime);

  const [newToDo, setNewToDo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const changeValue = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    if (todoValue != "") {
      setNewToDo([...newToDo, { name: todoValue }]);
      setTodoValue("");
      window.localStorage.setItem(
        "result",
        JSON.stringify([...newToDo, todoValue])
      );
    }
  };

  useEffect(() => {
    setNewToDo(JSON.parse(window.localStorage.getItem("result")));
  }, []);

  return (
    <Container>
      <DateDay>{currentDate}</DateDay>
      <DateTime>{currentTime}</DateTime>
      <MainDiv>
        <InputDiv>
          <NewTodo
            placeholder="Note"
            value={todoValue}
            onChange={changeValue}
          />
          <Check>
            <img src="./images/Vector.png" alt="check" />
          </Check>
        </InputDiv>
        <Button onClick={addTodo}>
          <img src="./images/add.png" alt="add" />
        </Button>
      </MainDiv>
      <TodosDiv>
        {newToDo.map((item, index) => (
          <NewToDo
            title={item}
            index={index}
            setNewToDo={setNewToDo}
            newToDo={newToDo}
            time={currentTime}
          />
        ))}
      </TodosDiv>
    </Container>
  );
}
