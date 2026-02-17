import "./CreatePersonModal.css";

function CreatePersonModal({ modal, setModal }) {
  return (
    <div
      className={`modal ${modal === "createPerson" ? "modal_opened" : ""}`}
      id="create-new-person"
    >
      <h2 className="modal__title">Create New Connection</h2>
      <div className="modal__container">
        <form id="" action="" className="modal__form" novalidate>
          <label for="person-name-input" className="modal__label">
            Person Name *
            <input
              id="person-name-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., Juan"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="modal__error"></span>
          </label>
          <label for="person-relationship-input" className="modal__label">
            Relationship
            <input
              id="person-relationship-input"
              type="text"
              className="modal__input"
              name="name"
              placeholder="e.g., best friend"
              minlength="2"
              maxlength="40"
            />
          </label>
          <label for="person-avatar" className="modal__label">
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
            <button className="modal__btn modal__btn-cancel">
              <img
                src=""
                alt="Cross mark"
                className="modal__cancel-btn-image"
              />
              Cancel
            </button>
            <button className="modal__btn modal__btn-create">
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
