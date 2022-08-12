import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditListingForm from "./editListingForm";

function EditListingFormModal() {

  const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className="listing-details-btns" onClick={() => setShowModal(true)}>Update listing</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditListingForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }

  export default EditListingFormModal;
