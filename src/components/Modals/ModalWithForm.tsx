import "../Modals/ModalWithForm.css";

function ModalWithForm({ children, title, modalContentMod, modalForm, onSubmit, id, buttonText, onClose, handleModalOverlayClick, isOpen }){
  return(
    <div className={`modal ${isOpen && "modal_opened"}`} onClick={handleModalOverlayClick}>
        <div className={modalContentMod}>
            <div className="modal__head">
                <h2 className="modal__title">{title}</h2>
                <form className={modalForm} onSubmit={onSubmit} id={id}>
                    {children}
                    <button className="modal__close" type= "button" onClick={onClose}></button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ModalWithForm;
