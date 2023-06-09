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

  let isChecked;

  const addTodo = () => {
    if (todoValue != "") {
      const clone = [...newToDo];
      clone?.push({ name: todoValue, time: currentTime, isChescked: false });
      setNewToDo(clone);
      setTodoValue("");
    }
  };

  useEffect(() => {
    if (newToDo?.length != 0) {
      window.localStorage.setItem("result", JSON.stringify(newToDo));
    }
    console.log(5 + 5);
  }, [newToDo]);

  useEffect(() => {
    const storedToDos = JSON.parse(window.localStorage.getItem("result"));
    if (storedToDos) {
      setNewToDo(storedToDos);
    }

    console.log(3 + 5);
  }, []);

  console.log(newToDo);
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
        {newToDo?.map((item, index) => (
          <NewToDo
            title={item.name}
            index={index}
            setNewToDo={setNewToDo}
            newToDo={newToDo}
            time={item.time}
          />
        ))}
      </TodosDiv>
    </Container>
  );
}
