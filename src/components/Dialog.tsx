import { ReactNode, useContext } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { DialogContext } from "../contexts/DialogContext";

interface DialogProps {
  title?: string;
  content?: ReactNode | string;
  isCentered?: boolean;
}

export default function Dialog({
  title = "Generic Title",
  content = "Generic Content",
  isCentered = true,
}: DialogProps) {
  const { showDialog, handleToggleDialog } = useContext(DialogContext);

  return (
    <>
      <Modal
        centered={isCentered}
        show={showDialog}
        onHide={handleToggleDialog}
      >
        <ModalHeader closeButton>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
      </Modal>
    </>
  );
}
