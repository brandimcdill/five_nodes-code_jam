import "./ModalWithForm.css";

function DeletePersonModal({ modal }) {
    return (
        <div
      className={`modal ${modal === "deletePerson" ? "modal_opened" : ""}`}
      id="delete-person"
    >
        <h3 className="modal__delete-person-title">Delete Connection?</h3>
        <p class="modal__delete-person-text">
          Are you sure you want to delete<span
            class="modal__delete-person-name"
          ></span> This will delete all memories associated with this person.
        </p>
        <div class="modal__delete-person-buttons">
          <button class="modal__btn modal__btn-delete-cancel">
            <img src="" alt="" class="modal__btn-cancel-delete" />
            Cancel</button>
          <button class="modal__btn modal__btn-delete">Delete</button>
        </div>
      </div>)
}
export default DeletePersonModal;