import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Message from "../Message/Message.jsx";
export default function LoadingModal({message}){
  const text =  message ? message : 'Идет загрузка...';
  return (
    <Modal >
      <Loader/>
      <Message message={text}/>
    </Modal>
  )
}