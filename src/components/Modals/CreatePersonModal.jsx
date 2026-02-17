function CreatePersonModal({ modal, setModal }) {
    return (
        <div class="modal" id="create-new-person">
        <div class="modal__container">
          <h2 class="modal__title">Create New Person</h2>
          <form id="" action="" class="modal__form" novalidate>
            <label for="person-name-input" class="modal__label"
              >Person Name
              <input
                id="person-name-input"
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
            <label for="person-nickname-input" class="modal__label">
              Nickname (optional)
              <input
                id="person-nickname-input"
                type="text"
                class="modal__input"
                name="name"
                placeholder="e.g., best friend"
                minlength="2"
                maxlength="40"
              />
            </label>
            <label for="person-avatar" class="modal__label">
              Avatar (optional)
              <input
                id="person-avatar"
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
            <button class="modal__btn modal__btn-create">Create</button>
          </form>
        </div>
      </div>)}
      export default CreatePersonModal;