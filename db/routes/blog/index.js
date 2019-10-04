const router = require("express").Router();


const {
  addBlog,
  getAll,
  updateBlog,
  deleteBlog,
  getBlog
} = require("./controller");

router.post("/", addBlog);
router.get("/:id", getBlog);
router.get("/", getAll);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
