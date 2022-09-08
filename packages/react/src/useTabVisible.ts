import { useState, useEffect } from "react";

export const useTabVisible = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return visible;
};
