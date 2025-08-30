import React, { useEffect, useRef } from "react";

const ToastMessage = ({ show, onClose, message, title = "Thông báo" }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show && toastRef.current) {
      const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
      const toast = new bootstrap.Toast(toastRef.current);
      toast.show();

      // Ẩn sau 3 giây
      toastRef.current.addEventListener("hidden.bs.toast", () => {
        onClose();
      });
    }
  }, [show, onClose]);

  return (
    <div
      ref={toastRef}
      className="toast align-items-center text-bg-primary border-0 position-fixed bottom-0 end-0 m-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">
          <strong>{title}:</strong> {message}
        </div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default ToastMessage;
