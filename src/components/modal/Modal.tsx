import type { MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  isOpen?: boolean;
  onClose: MouseEventHandler<HTMLElement>;
  children: ReactNode;
}

const Modal = ({ isOpen = true, onClose, children }: IModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          padding: "2rem",
          background: "#ffffff",
          borderRadius: "10px",
          zIndex: 100000,
          color: "#222221ff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{ alignSelf: "self-end", color: "#ffffff", background: "red" }}
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
