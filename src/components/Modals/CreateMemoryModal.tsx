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
<<<<<<< HEAD
          <label for="entry-note-input" className="entry__label">
=======
          <label htmlFor="entry-note-input" className="entry__label">
>>>>>>> 7489e29f23bff2fb56cbfab09ddc87c4c621060b
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
<<<<<<< HEAD
          <label for="entry-link-input" className="entry__link">
=======
          <label htmlFor="entry-link-input" className="entry__link">
>>>>>>> 7489e29f23bff2fb56cbfab09ddc87c4c621060b
            Link
            <input
              id="entry-link-input" 
              type="url" 
              className="entry__link-input" 
              name="link" 
              placeholder="https://..."
            />
          </label>
<<<<<<< HEAD
          <label for="entry-image-link-input" clasName="entry__image">
=======
          <label htmlFor="entry-image-link-input" className="entry__image">
>>>>>>> 7489e29f23bff2fb56cbfab09ddc87c4c621060b
            <img src="" alt="Paper clip image" className="entry__image-paperclip" />
            <input 
              id="entry-image-input"
              type="url" 
              className="entry__image-input"
              name="link"/>
          </label>
<<<<<<< HEAD
          <label for="entry-gift-card-input" className="entry__gift-card">
=======
          <label htmlFor="entry-gift-card-input" className="entry__gift-card">
>>>>>>> 7489e29f23bff2fb56cbfab09ddc87c4c621060b
            <img src="" alt="Camera image" className="entry__gift-card-camera" />
            <input 
              id="entry-gift-card-input"
              type="text" 
              className="entry__gift-card-input"
              name="card-number" 
              minLength={2}
              maxLength={20} 
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