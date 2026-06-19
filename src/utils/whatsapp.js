export const getWhatsAppLink = (productName = '') => {
  const text = `Hello ThreadTales 🌸

I would like to place an order.

Product Name: ${productName}
Customization Required:
Color Preference:
Quantity:

Please share further details.`;

  return `https://wa.me/919309456377?text=${encodeURIComponent(text)}`;
};
