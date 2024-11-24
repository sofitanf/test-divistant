export const randomId = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

export const slugText = (text: string) => {
  return text.toLowerCase().replaceAll(' ', '-');
};
