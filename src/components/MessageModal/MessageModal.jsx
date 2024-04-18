import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";

export default function MessageModal({close}){
  return (
    <Modal close={close}>
<Loader />
    </Modal>
  )
}