const router = require("express").Router();

const path = require("path");

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
