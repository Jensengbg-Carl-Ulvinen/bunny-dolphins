// Här genereras order

function getOrderNr() {

  let letters = ["A", "B", "C"];

  return `AB${Date.now()}${
    letters[Math.floor(Math.random() * letters.length)]
  }`;
}

function getETA() {
  let eta = 8;
  return eta + Math.floor(Math.random() * 16);
}

module.exports = { getOrderNr, getETA };
