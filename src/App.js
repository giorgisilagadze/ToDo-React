import { GlobalStyled } from "./styled/Global.styled";
import { StyledApp } from "./styled/App.styled";
import { StyledTitle } from "./styled/Title.styled";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <GlobalStyled />
      <StyledApp>
        <StyledTitle>Todo</StyledTitle>
        <ToDo />
      </StyledApp>
    </div>
  )
}

export default App;
