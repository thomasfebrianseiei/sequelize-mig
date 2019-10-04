const express = require("express");
const router = express.Router();

const {
  addAdmin,
  getAll,
  updateAdmin,
  deleteAdmin,
  getAdmin
} = require("./controller");

router.post("/", addAdmin);
router.get("/:id", getAdmin);
router.get("/", getAll);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
