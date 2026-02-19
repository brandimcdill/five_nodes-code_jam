import "./ModalWithForm.css";
import "./CreateMemoryModal.css";

function CreatePersonModal({ modal, closeModal, handleAddNewConnection }) {
  return (
    <div
      className={`modal ${modal === "createPerson" ? "modal_opened" : ""}`}
      id="create-new-person"
    >
      <h2 className="modal__title">Create New Connection</h2>
      <div className="modal__container">
        <form id="" action="" className="modal__form" noValidate>
          <label htmlFor="person-name-input" className="modal__label">
            Person Name *
            <input
              id="person-name-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., Juan"
              minLength={2}
              maxLength={40}
              required
            />
            <span className="modal__error"></span>
          </label>
          <label htmlFor="person-relationship-input" className="modal__label">
            Relationship
            <input
              id="person-relationship-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., best friend"
              minLength={2}
              maxLength={40}
            />
          </label>
          <label htmlFor="person-avatar" className="modal__label">
            Avatar
            <input
              id="person-avatar"
              type="url"
              className="modal__input"
              name="link"
              placeholder=""
            />
          </label>
          <div className="modal__btn-container">
            <button className="modal__btn modal__btn-cancel" type="button" onClick={closeModal}>
              <img
                src=""
                alt="Cross mark"
                className="modal__cancel-btn-image"
              />
              Cancel
            </button>
            <button className="modal__btn modal__btn-create" type="submit" onClick={() => handleAddNewConnection(document.getElementById("person-name-input").value, document.getElementById("person-relationship-input").value, document.getElementById("person-avatar").value)}>
              <img src="" alt="Add sign" className="modal__btn-add" />
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreatePersonModal;
