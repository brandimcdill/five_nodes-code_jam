import "./ModalWithForm.css";

function DeletePersonModal({ modal, handleDeleteConnectionClick, closeModal }) {
    return (
        <div
      className={`modal ${modal === "deletePerson" ? "modal_opened" : ""}`}
      id="delete-person"
    >
        <h3 className="modal__delete-person-title">Delete Connection?</h3>
        <p className="modal__delete-person-text">
          Are you sure you want to delete<span
            className="modal__delete-person-name"
          ></span> This will delete all memories associated with this person.
        </p>
        <div className="modal__delete-person-buttons">
          <button className="modal__btn modal__btn-delete-cancel" type="button" onClick={closeModal}>
            <img src="" alt="" className="modal__btn-cancel-delete" />
            Cancel</button>
          <button className="modal__btn modal__btn-delete" type="button" onClick={handleDeleteConnectionClick}>Delete</button>
        </div>
      </div>)
}
export default DeletePersonModal;