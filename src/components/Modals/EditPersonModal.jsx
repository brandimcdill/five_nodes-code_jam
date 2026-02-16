function EditPersonModal() {
    return (
        <div class="modal" id="edit-person">
        <div class="modal__container">
          <button type="button" class="modal__btn modal__btn-discard">
            <img src="" alt="" class="modal__discard-btn-image" />
          </button>
          <h2 class="modal__title">Edit Person</h2>
          <form id="" action="" class="modal__form" novalidate>
            <label for="edit-person-name-input" class="modal__label"
              >Person Name
              <input
                id="edit-person-name-input"
                type="text"
                class="modal__input"
                name="name"
                placeholder="e.g., Juan"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="modal__error"></span>
            </label>
            <label for="edit-person-nickname-input" class="modal__label">
              Nickname (optional)
              <input
                id="edit-person-nickname-input"
                type="text"
                class="modal__input"
                name="name"
                placeholder="e.g., best friend"
                minlength="2"
                maxlength="40"
              />
            </label>
            <label for="edit-person-avatar" class="modal__label">
              Avatar (optional)
              <input
                id="edit-person-avatar"
                type="url"
                class="modal__input"
                name="link"
                placeholder=""
              />
            </label>
            <button class="modal__btn modal__btn-cancel">
              <img src="" alt="Cross mark" class="modal__cancel-btn-image" />
              Cancel
            </button>
            <button class="modal__btn modal__btn-save">Save</button>
          </form>
        </div>
      </div>)}
      export default EditPersonModal;