import "./ModalWithForm.css";
import { FaPaperclip } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function CreateMemoryModal({ modal, closeModal }) {
  return (
    <div
      className={`modal ${modal === "createMemory" ? "modal_opened" : ""}`}
        id="create-new-memory">
      <section className="entry">
        <h3 className="entry__date">Thursday, February 19</h3>
        <div className="entry__entry-container">
          <p className="entry__date"></p>
          <p className="entry__title">New Memory</p>
          <label htmlFor="entry-note-input" className="entry__label">
            Note
            <input
              id="entry-note-input" 
              type="text" 
              className="entry__note-input" 
              name="note" 
              placeholder="What are you thinking about?"
              required
              minLength={2}
              maxLength={200} 
            />
          </label>
          <label htmlFor="entry-link-input" className="entry__link">
            Link
            <input
              id="entry-link-input" 
              type="url" 
              className="entry__link-input" 
              name="link" 
              placeholder="https://..."
            />
          </label>
          <label htmlFor="entry-image-link-input" className="entry__image">
          Image
            <input 
              id="entry-image-input"
              type="url" 
              className="entry__image-input"
              name="link"
              placeholder="https://..."
            />
          </label>
          <label htmlFor="entry-gift-card-input" className="entry__gift-card">
            Scan Gift Card
            <input 
              id="entry-gift-card-input"
              type="text" 
              className="entry__gift-card-input"
              name="card-number" 
              minLength={2}
              maxLength={20} 
            />
          </label>
          <div className="entry__btn-container">
            <button className="modal__btn entry__btn-cancel" onClick={closeModal}>
            <IoClose className="entry__btn-cancel-image" />
            Cancel</button>
          <button className="modal__btn entry__btn-save">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}
    export default CreateMemoryModal;