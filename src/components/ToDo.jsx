import { Container, Date } from "../styled/Container.Styled";

export default function ToDo() {
  const date = new Date();
  const currentDate = date.toLocaleDateString();

  return (
    <Container>
      <Date>{currentDate}</Date>
    </Container>
  );
}
