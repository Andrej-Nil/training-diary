import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

export default function MessageModal({close, message, isLoading}){
  return (
    <Modal cross={isLoading ? null : true} close={isLoading ? null : close}>
      {isLoading && <Loader />}
      {!isLoading &&<Message close={close} message={message} />}
    </Modal>
  )
}