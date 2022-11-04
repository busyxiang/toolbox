import { useEffect, useState } from 'react';

type UseInjectScriptProps = {
  url: string;
  attributes?: Record<string, string>;
  onLoad?: () => void;
};

export const useInjectScript = (props: UseInjectScriptProps) => {
  const { url, attributes, onLoad } = props;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    if (attributes && Object.keys(attributes).length > 0) {
      Object.entries(attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }

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
