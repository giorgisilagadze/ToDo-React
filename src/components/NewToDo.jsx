import { useState } from "react";
import {
  ParentDiv,
  TodoTitle,
  Time,
  ChildDiv,
  CheckV2,
  Remove,
} from "../styled/NewToDo.styled";

// const deleteById = (id) => {
//   setNewToDo((oldValues) => {
//     return oldValues.filter((item) => item.id !== id);
//   });
// };

export default function NewToDo({ title, time, index, setNewToDo, newToDo }) {
  const removeTodo = () => {
    setNewToDo(newToDo.filter((todo, i) => i !== index));
  };

  const [checked, setChecked] = useState(false);
  return (
    <ParentDiv>
      <div>
        <TodoTitle>{title}</TodoTitle>
        <Time>At {time}</Time>
      </div>
      <ChildDiv>
        <CheckV2
          bg={checked ? "#20EEB0" : "white"}
          onClick={() => setChecked(!checked)}
        >
          <img src="./images/Vector.png" alt="check" />
        </CheckV2>
        <Remove src="./images/remove.png" onClick={removeTodo} />
      </ChildDiv>
    </ParentDiv>
  );
}
