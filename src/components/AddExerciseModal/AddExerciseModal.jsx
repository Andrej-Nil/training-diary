import Modal from "../Modal/Modal";
import TabBtn from "../TabBtn/TabBtn.jsx";
import Tabs from "../Tabs/Tabs.jsx";
import {useContext} from "react";
import {ModalsContext} from "../../App.jsx";
import AddExerciseForm from "../AddExerciseForm/AddExerciseForm";

export default function AddExerciseModal({getExercise}){
  const {openModal, closeModal} = useContext(ModalsContext);
  return (
    <Modal darkBg cross close={() => closeModal('addExercise')}>
      <Tabs>
        <TabBtn isActive={true}>Добавить упражнение</TabBtn>
      </Tabs>
      <AddExerciseForm getExercise={getExercise} openModal={openModal} closeModal={closeModal}/>
    </Modal>
  )
}