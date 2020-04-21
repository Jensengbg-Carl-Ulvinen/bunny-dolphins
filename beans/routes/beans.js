const {
  Router
} = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const {
  getOrderNr
} = require("../utils/utils");

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/", async (req, res) => {
  const order = {
    orderNr: getOrderNr()
  };

  setTimeout(() => {
    res.send(order);
  }, 2000);
});

router.get("/key", (req, res) => {
  const key = {
    key: uuid()
  };
  res.send(JSON.stringify(key));
});

module.exports = router;
