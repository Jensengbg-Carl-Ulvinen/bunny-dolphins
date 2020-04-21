// Här genereras order

function getOrderNr() {

  let letters = ["A", "B", "C"];

  return `AB${Date.now()}${
    letters[Math.floor(Math.random() * letters.length)]
  }`;
}

module.exports = { getOrderNr };
