export const randomHexColor = () => {
  const code = (Math.random() * 0xfffff * 1000000).toString(16);
  return `#${code.slice(0, 6)}`;
};

export const isHexColor = (hexColor: string) => {
  const regex = /^#[0-9A-F]{6}$/i;

  return regex.test(hexColor);
};
