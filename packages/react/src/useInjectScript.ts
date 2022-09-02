import { useEffect, useState } from "react";

type UseInjectScriptProps = {
  url: string;
  onLoad?: () => void;
};

export const useInjectScript = (props: UseInjectScriptProps) => {
  const { url, onLoad } = props;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      onLoad?.();

      setLoaded(true);
    };

    script.onerror = () => {
      setError(true);
    };

    document.body.append(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, onLoad]);

  return { loaded, error };
};
