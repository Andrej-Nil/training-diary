import Modal from "../Modal/Modal";
import TabBtn from "../TabBtn/TabBtn.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import CreateForm from "../CreateForm/CreateForm";

export default function CreateModal({close, createWorkout}){
  return (
    <Modal darkBg cross close={close}>
      <Tabs>
        <TabBtn isActive={true}>Создание тренировки</TabBtn>
      </Tabs>
      <CreateForm create={createWorkout}/>
    </Modal>
  )
}