import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setOnlineStatus(navigator.onLine);
    };

    window.addEventListener("offline", updateOnlineStatus);
    window.addEventListener("online", updateOnlineStatus);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("offline", updateOnlineStatus);
      window.removeEventListener("online", updateOnlineStatus);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
