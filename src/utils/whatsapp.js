export const getWhatsAppLink = (productName = '') => {
  const baseMessage = `Hi ThreadTales! \u{1F33C}\nI'd like to ask about a custom crochet creation.`;
  const text = productName ? `${baseMessage}\n\nProduct: ${productName}` : baseMessage;

  return `https://wa.me/919309456377?text=${encodeURIComponent(text)}`;
};
