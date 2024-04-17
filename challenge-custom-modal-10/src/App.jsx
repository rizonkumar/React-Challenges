import { useState } from "react";
import "./App.css";
import CustomModal from "./CustomModal";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isOffer, setIsOffer] = useState(false);

  const handleOpenModal = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOfferAccept = () => {
    setIsOffer(true);
    setIsShow(false);
  };

  return (
    <>
      <div className="show-offer">
        {!isOffer && (
          <button onClick={handleOpenModal} className="offer-btn">
            Show Offer
          </button>
        )}
        {isOffer && <div style={{ fontSize: 50 }}>Offer accepted</div>}
      </div>
      {isShow && (
        <CustomModal
          handleClose={handleClose}
          handleOfferAccept={handleOfferAccept}
        />
      )}
    </>
  );
}

export default App;
