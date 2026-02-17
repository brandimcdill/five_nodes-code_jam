import "./ModalWithForm.css";

function CreateMemoryModal({ modal }) {
  return (
    <div
      className={`modal ${modal === "createMemory" ? "modal_opened" : ""}`}
        id="create-new-memory">
            <section class="entry">
        <button class="entry__btn_back">
          <img src="" alt="" class="entry-arrow" />
          Back
        </button>
        <div class="entry__entry-container">
          <p class="entry__date"></p>
          <p class="entry__title">New Memory</p>
          <label for="entry-note-input" class="entry__label">
            Note
            <input
              id="entry-note-input" 
              type="text" 
              class="entry__note-input" 
              name="note" 
              placeholder="What are you thinking about?"
              required
              minlength="2"
              maxlength="200" 
            />
          </label>
          <label for="entry-link-input" class="entry__link">
            Link
            <input
              id="entry-link-input" 
              type="url" 
              class="entry__link-input" 
              name="link" 
              placeholder="https://..."
            />
          </label>
          <label for="entry-image-link-input" class="entry__image">
            <img src="" alt="Paper clip image" class="entry__image-paperclip" />
            <input 
              id="entry-image-input"
              type="url" 
              class="entry__image-input"
              name="link"/>
          </label>
          <label for="entry-gift-card-input" class="entry__gift-card">
            <img src="" alt="Camera image" class="entry__gift-card-camera" />
            <input 
              id="entry-gift-card-input"
              type="text" 
              class="entry__gift-card-input"
              name="card-number" 
              minlength="2"
              maxlength="20" 
            />
          </label>
          <button class="modal__btn entry__btn-cancel">
            <img src="" alt="Cross mark" class="entry__btn-cancel-image" />
            Cancel</button>
          <button class="modal__btn entry__btn-save">Save</button>
        </div>
       </section>
    </div>
  );
}export default CreateMemoryModal;