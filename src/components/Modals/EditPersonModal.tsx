import "./ModalWithForm.css";

function EditPersonModal({ modal, closeModal, handleEditPersonClick}) {
  return (
    <div
      className={`modal ${modal === "editPerson" ? "modal_opened" : ""}`}
      id="edit-person"
    >
      <div className="modal__container">
        <button type="button" className="modal__btn modal__btn-discard">
          <img src="" alt="" className="modal__discard-btn-image" />
        </button>
        <h2 className="modal__title">Edit Person</h2>
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
          <label htmlFor="edit-person-nickname-input" className="modal__label">
            Nickname (optional)
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
          <button className="modal__btn modal__btn-cancel" onClick={closeModal}>
            <MdCancel className="modal__cancel-btn-image" />
            Cancel
          </button>
          <button
            className="modal__btn modal__btn-save"
            onClick={handleEditPersonClick}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditPersonModal;
