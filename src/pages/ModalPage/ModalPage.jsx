import React, { useEffect, useState } from "react";
import { Card, FlatButton, Modal, SolidButton } from "../../lib";
import "./ModalPage.scss";

export function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("theme-dark");
    return () => {
      document.body.classList.toggle("theme-dark");
    };
  });
  return (
    <div className="ModalPage theme-dark">
      <SolidButton onClick={() => setShowModal(true)}>SHOW MODAL</SolidButton>
      {showModal && (
        <Modal>
          <Card
            style={{
              backgroundColor: "hsl(204, 15%, 8%)",
              padding: "100px 150px",
            }}
          >
            <FlatButton onClick={() => setShowModal(false)}>
              DISMISS MODAL
            </FlatButton>
          </Card>
        </Modal>
      )}
    </div>
  );
}
