import React, { useState } from "react";
import { Card, Button, Modal } from "../../lib";
import "./ModalPage.scss";

export function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="ModalPage">
      <Button solid onClick={() => setShowModal(true)}>
        SHOW MODAL
      </Button>
      {showModal && (
        <Modal>
          <Card backgroundColor="var(--modal-bkg)" padding="24px 32px">
            <Button onClick={() => setShowModal(false)}>DISMISS MODAL</Button>
          </Card>
        </Modal>
      )}
    </div>
  );
}
