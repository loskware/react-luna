import React, { useState } from "react";
import { Card, FlatButton, Modal, SolidButton } from "../../lib";
import "./ModalPage.scss";

export function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="ModalPage">
      <SolidButton onClick={() => setShowModal(true)}>SHOW MODAL</SolidButton>
      {showModal && (
        <Modal>
          <Card backgroundColor="var(--modal-bkg)" padding="24px 32px">
            <FlatButton onClick={() => setShowModal(false)}>
              DISMISS MODAL
            </FlatButton>
          </Card>
        </Modal>
      )}
    </div>
  );
}
