import React, { ReactElement } from "react";
import "./Modal.css";

export type ModalProps = {
  onCancel: () => void;
  title: string;
  formId?: string;
  children: ReactElement;
};

export function Modal({
  onCancel,
  title,
  formId,
  children,
}: ModalProps): ReactElement {
  return (
    <div className="modal">
      <div className="modal__container" role="dialog">
        <h1 className="modal__heading">{title}</h1>
        <div className="modal__children">{children}</div>
        <div className="modal__buttons">
          <button className="modal__btn--cancel" onClick={onCancel}>
            Cancel
          </button>
          {formId && (
            <button className="modal__btn--confirm" type="submit" form={formId}>
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
