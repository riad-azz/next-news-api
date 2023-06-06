export const removeEmptyLines = (text: string) => text.replace(/\n/g, "");

export const cleanseHtmlTags = (text: string) => text.replace(/<.*?>/g, "");

export const cleanseText = (text: string) => {
  let cleanText = cleanseHtmlTags(text);
  cleanText = removeEmptyLines(cleanText);
  return cleanText.trim();
};

export const isLink = (link: string) => {
  const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
  return pattern.test(link);
};
