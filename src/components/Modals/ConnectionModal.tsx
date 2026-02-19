import "./ConnectionModal.css";
// import Calendar from "../Calendar/Calendar";
function ConnectionModal({ selectedCard, onClose, activeModal, date, onChange }) {
  if (!selectedCard) return null;
  return (
    <section className="calendar">
        <div className="calendar__btn-container">
          <button className="calendar__back">
            <img src="" alt="" className="calendar__back-arrow" />
            Back
          </button>
          <button className="calendar__wrap">
            <img src="" alt="" className="calendar__download" />
            Wrap
          </button>
        </div>
        <div className="calendar__txt-elements">
          <img src="" alt="" className="calendar__avatar" />
          <div className="calendar__description-elements">
            <p className="calendar__name">Juan</p>
            <p className="calendar__title">best friend</p>
          </div>
        </div>
        {/* <Calendar
        {...config}
        onChange={onChange}
        value={date}
        activeModal={activeModal}
        selectedCard={selectedCard}
      /> */}
    </section>
  )};
  export default ConnectionModal;