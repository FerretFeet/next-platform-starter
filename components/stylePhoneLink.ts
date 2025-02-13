export default function stylePhoneLink(phoneLink: string) {
  // Assume given tel:+{11-Digit-Number} && First digit not needed
  // Add dashes between phone number section
  if (!phoneLink) return ""; // Handle the case where phoneLink is null or undefineds
  const slicedPhone = phoneLink.slice(6);

  const areaCode = slicedPhone.slice(0, 3);
  const prefix = slicedPhone.slice(3, 6);
  const lineNumber = slicedPhone.slice(6);

  return `${areaCode}-${prefix}-${lineNumber}`;
}
