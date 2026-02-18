import "./ModalWithForm.css";

interface EditPersonModalStyles {
  container: React.CSSProperties;
  title: React.CSSProperties;
  buttonDiscard: React.CSSProperties;
  buttonsContainer: React.CSSProperties;
}

const EditPersonModalStyles: EditPersonModalStyles = {
  container: {
    backgroundColor: "#ff657b",
    height: "530px",
    width: "270px",
    border: "4px solid #ddcea7",
    borderRadius: "16px",
    padding:"26px 26px 0"
  },
  title: {
    margin: "0",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "17px"
  },
  buttonDiscard: {
    background: "none",
    border: "none"
  }
}



function EditPersonModal({ modal, closeModal, handleEditPersonClick }) {
  return (
    <div
      className={`modal ${modal === "editPerson" ? "modal_opened" : ""}`}
      id="edit-person"
    >
      <button type="button" className="modal__btn modal__btn-discard" style={EditPersonModalStyles.buttonDiscard}>
        <img src="" alt="Trash bin image" className="modal__discard-btn-image" />
      </button>
      <div className="modal__container" style={EditPersonModalStyles.container}>
        <h2 className="modal__title" style={EditPersonModalStyles.title}>Edit Connection</h2>
        <form id="" action="" className="modal__form" noValidate>
          <label htmlFor="edit-person-name-input" className="modal__label">
            Person Name *
            <input
              id="edit-person-name-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., Juan"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="modal__error"></span>
            <span className="modal__error"></span>
          </label>
          <label htmlFor="edit-person-relationship-input" className="modal__label">
            Relationship
            <input
              id="edit-person-relationship-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., best friend"
              minLength={2}
              maxLength={40}
            />
          </label>
          <label htmlFor="edit-person-avatar" className="modal__label">
            Avatar
            <input
              id="edit-person-avatar"
              type="url"
              className="modal__input"
              name="link"
              placeholder=""
            />
          </label>
          <div className="modal__edit-person-buttons" style={EditPersonModalStyles.buttonsContainer}>
            <button className="modal__btn modal__btn-cancel">
              <img src="" alt="Cross mark" className="modal__cancel-btn-image" />
              Cancel
            </button>
            <button className="modal__btn modal__btn-create">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditPersonModal;
