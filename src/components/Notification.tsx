import { useContext } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { NotificationContext } from "../contexts/NotificationContext";

interface NotificationProps {
  title?: string;
  message?: string;
  variant?: "success" | "danger" | "warning" | "info";
}

export default function Notification({
  title = "Warning",
  message = "Generic message",
  variant = "info",
}: NotificationProps) {
  const { showNotification, handleToggleNotification } =
    useContext(NotificationContext);

  return (
    <>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          autohide
          delay={3000}
          show={showNotification}
          onClose={handleToggleNotification}
          className={`bg-${variant} text-auto`}
        >
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
