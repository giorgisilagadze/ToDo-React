import { useState } from "react";
import {
  ParentDiv,
  TodoTitle,
  Time,
  ChildDiv,
  CheckV2,
  Remove,
} from "../styled/NewToDo.styled";

export default function NewToDo({ title, time, index, setNewToDo, newToDo }) {
  const removeTodo = () => {
    setNewToDo(newToDo.filter((todo, i) => i !== index));
    localStorage.setItem(
      "result",
      JSON.stringify(newToDo.filter((todo, i) => i !== index))
    );
  };

  return (
    <ParentDiv>
      <div>
        <TodoTitle>{title}</TodoTitle>
        <Time>At {time}</Time>
      </div>
      <ChildDiv>
        <CheckV2
          bg={newToDo[index].isChecked ? "#20EEB0" : "white"}
          onClick={() => {
            newToDo.map((todo, i) => {
              const clone = newToDo;
              if (i === index) {
                clone[i].isChecked = !clone[i].isChecked;
              }
              setNewToDo([...clone]);
            });
          }}
        >
          <img src="./images/Vector.png" alt="check" />
        </CheckV2>
        <Remove src="./images/remove.png" onClick={removeTodo} />
      </ChildDiv>
    </ParentDiv>
  );
}
