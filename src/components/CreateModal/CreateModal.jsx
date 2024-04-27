import Modal from "../Modal/Modal";
import TabBtn from "../TabBtn/TabBtn.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import CreateForm from "../CreateForm/CreateForm";
import {useContext} from "react";
import {ModalsContext} from "../../App.jsx";

export default function CreateModal(){
  const {openModal, closeModal} = useContext(ModalsContext);
  return (
    <Modal darkBg cross close={() => closeModal('create')}>
      <Tabs>
        <TabBtn isActive={true}>Создание тренировки</TabBtn>
      </Tabs>
      <CreateForm openModal={openModal} closeModal={closeModal}/>
    </Modal>
  )
}