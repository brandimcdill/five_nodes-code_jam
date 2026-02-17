import "./ModalWithForm.css";

function CreateMemoryModal({ modal }) {
  return (
    <div
      className={`modal ${modal === "createMemory" ? "modal_opened" : ""}`}
        id="create-new-memory">
            <section className="entry">
        <button className="entry__btn_back">
          <img src="" alt="" className="entry-arrow" />
          Back
        </button>
        <div className="entry__entry-container">
          <p className="entry__date"></p>
          <p className="entry__title">New Memory</p>
          <label for="entry-note-input" className="entry__label">
            Note
            <input
              id="entry-note-input" 
              type="text" 
              className="entry__note-input" 
              name="note" 
              placeholder="What are you thinking about?"
              required
              minlength="2"
              maxlength="200" 
            />
          </label>
          <label for="entry-link-input" className="entry__link">
            Link
            <input
              id="entry-link-input" 
              type="url" 
              className="entry__link-input" 
              name="link" 
              placeholder="https://..."
            />
          </label>
          <label for="entry-image-link-input" clasName="entry__image">
            <img src="" alt="Paper clip image" className="entry__image-paperclip" />
            <input 
              id="entry-image-input"
              type="url" 
              className="entry__image-input"
              name="link"/>
          </label>
          <label for="entry-gift-card-input" className="entry__gift-card">
            <img src="" alt="Camera image" className="entry__gift-card-camera" />
            <input 
              id="entry-gift-card-input"
              type="text" 
              className="entry__gift-card-input"
              name="card-number" 
              minlength="2"
              maxlength="20" 
            />
          </label>
          <button className="modal__btn entry__btn-cancel">
            <img src="" alt="Cross mark" className="entry__btn-cancel-image" />
            Cancel</button>
          <button className="modal__btn entry__btn-save">Save</button>
        </div>
       </section>
    </div>
  );
}export default CreateMemoryModal;