import "../Modals/ModalWithForm.css";

//AI help
type ModalWithFormProps = {
  children: React.ReactNode;
  title: string;
  modalContentMod: string;
  modalForm: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  id?: string;
  buttonText?: string;
  onClose: () => void;
  handleModalOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isOpen: boolean;
};
//AI help end
function ModalWithForm({
  children,
  title,
  modalContentMod,
  modalForm,
  onSubmit,
  id,
  buttonText,
  onClose,
  handleModalOverlayClick,
  isOpen,
}: ModalWithFormProps) {
  return (
    <div
      className={`modal ${isOpen && "modal-opened"}`}
      onClick={handleModalOverlayClick}
    >
      <div className={modalContentMod}>
        <div className="modal__head">
          <h2 className="modal__title">{title}</h2>
          <form className={modalForm} onSubmit={onSubmit} id={id}>
            {children}
            <button
              className="modal__close"
              type="button"
              onClick={onClose}
            ></button>
          </form>
        </div>
        </div>
        </div>
    )
};

export default ModalWithForm;
