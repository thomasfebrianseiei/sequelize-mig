const db = require("../../models")


const {blog} = db

module.exports = {
  //create
  addBlog: (req, res) => {
    blog.create(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  getAll: (req, res) => {
    blog.findAll()
      .then(result => {
        res.send(result);
      })
      //=> {
      // res.send(result.map(item => {
      //     return {
      //       name: item.name.toUpperCase()
      // }}))
      .catch(error => res.send(error));
  },
  updateBlog: (req, res) => {
    blog.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  deleteBlog: (req, res) => {
    blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.status(200).send({ message: "your data is succes deleted" });
      })
      .catch(error => res.send(error));
  },
  getBlog: (req, res) => {
    blog.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  }
};
