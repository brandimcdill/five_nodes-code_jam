import "./ModalWithForm.css";
import { FaPaperclip } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
          <label htmlFor="entry-image-link-input" className="entry__image">

            <img src="" alt="Paper clip image" className="entry__image-paperclip" />
            <input 
              id="entry-image-input"
              type="url" 
              className="entry__image-input"
              name="link"/>
          </label>

          <label htmlFor="entry-gift-card-input" className="entry__gift-card">

            <img src="Gift Card" alt="Camera image" className="entry__gift-card-camera" />
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
            <IoClose className="entry__btn-cancel-image" />
            Cancel</button>
          <button className="modal__btn entry__btn-save">Save</button>
        </div>
       </section>
       </div>
  );
}
    export default CreateMemoryModal;