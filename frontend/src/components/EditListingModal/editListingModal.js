import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditListingForm from ".";

function EditListingFormModal({ showModal, setShowModal }) {

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit Listing</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditListingForm showModal={showModal} setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    );
  }

  export default EditListingFormModal;
