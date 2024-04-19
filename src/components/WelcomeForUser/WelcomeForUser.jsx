import Welcome from "../Welcome/Welcome";
import Title from "../Title/Title";
import Text from "../Text/Text.jsx";
import Button from "../Button/Button.jsx";
import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";

export default function WelcomeForUser(){
  return (
    <Welcome>
      <Title>Добро пожаловать!</Title>
      <Text>Привет! Хотите начать тренировку? Отлично!</Text>
      <ButtonGroup>
        <Button>Старт</Button>
      </ButtonGroup>
    </Welcome>
  )
}