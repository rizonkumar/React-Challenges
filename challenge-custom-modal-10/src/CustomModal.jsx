const CustomModal = ({ handleClose, handleOfferAccept }) => {
  const handleOutsideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
      handleClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <div className="content">Click the button below</div>
        <button className="accept-btn" onClick={handleOfferAccept}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
