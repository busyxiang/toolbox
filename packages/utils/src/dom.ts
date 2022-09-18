export const downloadFile = ({
  url,
  fileName,
}: {
  url: string;
  fileName?: string;
}) => {
  const link = document.createElement('a');
  link.setAttribute('href', url);

  fileName && link.setAttribute('download', fileName);

  document.body.append(link);

  link.click();

  link.remove();
};

export const detectLanguage = (defaultLang = 'en-US') => {
  return (
    navigator.language ||
    (Array.isArray(navigator.languages) && navigator.languages[0]) ||
    defaultLang
  );
};

export const preferDarkTheme = () => {
  return (
    window &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};

export const getSelectedText = () => {
  return window.getSelection().toString();
};
