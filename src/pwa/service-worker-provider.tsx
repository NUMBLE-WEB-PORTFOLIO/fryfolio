"use client";

import { ReactNode, useEffect } from "react";

const ServiceWorkerProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerWorker = async () => {
        const registration = await navigator.serviceWorker.register(
          "/pwa-service-worker.js"
        );
        registration.waiting?.postMessage("SKIP_WAITING");
      };

      registerWorker();
    }
  }, []);

  return children;
};

export default ServiceWorkerProvider;
