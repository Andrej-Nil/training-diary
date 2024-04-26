import Modal from "../Modal/Modal";
// import Loader from "../Loader/Loader";
import Message from "../Message/Message";

export default function MessageModal({close, message}){
  console.log(message)
  function handelClose(){
    close('message')
  }


  return (
    <Modal cross close={handelClose}>
      <Message close={handelClose} message={message} />
    </Modal>
  )
}