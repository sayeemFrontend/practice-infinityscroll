
import "./modal.css"
const CustomModal = ({ modal, setModal, item, setCheck }) => {
  if (modal.show) {
    window.localStorage.setItem("path", `/product/view/${item._id}`)
  }
  else {
    localStorage.removeItem("path")
  }

  const onOutSideClick = () => {
    setModal(false)
    setCheck(true)
  }
  return (
    <div onClickCapture={onOutSideClick} className="modalContainer">
      <div
        onClickCapture={() => setModal(modal)}
        className={modal ? "customModal positionTwo " : "cutomModal"}
      >
        <div className="">Product Details On Modal</div>
      </div>
    </div>
  );
}
export default CustomModal;
