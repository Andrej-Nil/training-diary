import Welcome from "../Welcome/Welcome";
import Title from "../Title/Title";
import Text from "../Text/Text";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";

export default function WelcomeForGuest({openModal}){
return (
  <Welcome>
    <Title>Добро пожаловать!</Title>
    <Text>Привет! Хотите начать тренировку? Отлично!</Text>
    <Text>Для того, что бы начачать необходимо совершить вход или зарегестрироваться</Text>
    <ButtonGroup>
      <Button onClick={() => openModal('auth', 'LOGIN')}>Вход</Button>
      <Button onClick={() => openModal('auth','REGISTER')}>Регистрация</Button>
    </ButtonGroup>
  </Welcome>
)
}