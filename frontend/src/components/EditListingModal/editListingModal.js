import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditListingForm from ".";

function EditListingFormModal() {

  const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit Listing</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditListingForm />
          </Modal>
        )}
      </>
    );
  }

  export default EditListingFormModal;
