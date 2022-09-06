export const downloadFile = ({
  url,
  fileName,
}: {
  url: string;
  fileName?: string;
}) => {
  const link = document.createElement("a");
  link.setAttribute("href", url);

  fileName && link.setAttribute("download", fileName);

  document.body.append(link);

  link.click();

  link.remove();
};
