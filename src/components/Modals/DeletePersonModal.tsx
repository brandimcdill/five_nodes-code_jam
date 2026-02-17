import "./ModalWithForm.css";

interface DeletePersonModalStyles {
  container: React.CSSProperties;
  title: React.CSSProperties;
  text: React.CSSProperties;
  buttonsContainer: React.CSSProperties;
  buttonCancel: React.CSSProperties;
  buttonSave: React.CSSProperties;
}

const DeletePersonModalStyles: DeletePersonModalStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "300px",
    width: "317px",
    padding: "34px 34px 0",
    backgroundColor: "#fefdfb",
    border: "2px solid #593a16",
    color: "#593a16"
  },
  title: {
    margin: "0",
    fontSize: "20px",
    paddingBottom: "18.5px"
  },
  text: {
    margin: "0"
  },
  buttonsContainer: {
    display: "flex",
    gap: "15px",
    padding: "25px 62px 57px"
  },
  buttonCancel: {
    color: "#fff",
    backgroundColor: "#593a16",
    border: "1px solid #000",
    fontSize: "14px"
  },
  buttonSave: {
    color: "#593a16",
    backgroundColor: "#fff",
    border: "1px solid #593a16",
    fontSize: "14px"
  }
}

function DeletePersonModal({ modal, handleDeleteConnectionClick, closeModal }) {
    return (
        <div
      className={`modal ${modal === "deletePerson" ? "modal_opened" : ""}`}
      id="delete-person"
      style={DeletePersonModalStyles.container}
    >
        <h3 className="modal__delete-person-title">Delete Connection?</h3>
        <p className="modal__delete-person-text">
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