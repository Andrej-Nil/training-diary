import Welcome from "../Welcome/Welcome";
import Title from "../Title/Title";
import Text from "../Text/Text.jsx";
import Button from "../Button/Button.jsx";
import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import {Link} from "react-router-dom";

export default function WelcomeForUser({workout}){
  const btnText = workout ? 'Тренировка' : 'Начать тренировку';
  const text = workout ? 'Ваша тренировка в самом разгаре!' : 'Привет! Хотите начать тренировку? Отлично!';
  return (
    <Welcome>
      <Title>Добро пожаловать!</Title>
      <Text>{text}</Text>
      <ButtonGroup>
        <Link to={'/training'}>
          <Button>{btnText}</Button>
        </Link>

      </ButtonGroup>
    </Welcome>
  )
}