export const cleanseHtmlTags = (text: string) => {
  const cleanedText = text.replace(/<.*?>/g, "");
  return cleanedText;
};

export const isLink = (link: string) => {
  const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
  return pattern.test(link);
};
