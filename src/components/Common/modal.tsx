"use client";

import { MouseEventHandler, ReactNode, useEffect } from "react";

import { IconClose } from "@/public/icons";
import Portal from "@/components/Common/portal";

const Modal = ({
  children,
  open = false,
  onClose,
}: {
  children?: ReactNode;
  open?: boolean;
  onClose: () => void;
}) => {
  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Portal id="modal-root">
      <div className="fixed inset-0 z-30 w-screen overflow-y-scroll">
        <div className="fixed inset-0 bg-black/50"></div>
        <div className="flex min-h-full justify-center p-4 sm:items-center">
          <section
            className="relative overflow-scroll bg-black sm:max-w-[70rem] w-full sm:my-8 rounded-[0.5rem] flex flex-col justify-center text-white p-[5rem] gap-[2rem] min-h-[30rem] box-border"
            onClick={stopPropagation}
          >
            <IconClose
              className="w-[3rem] h-[3rem] fill-white cursor-pointer absolute right-[5rem] top-[5rem]"
              onClick={onClose}
            />
            {open && children}
          </section>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
